import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'routes';
import favicon from 'serve-favicon';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/favicon', 'favicon.ico')));

app.use((req, res) => {
    const location = createLocation(req.url);
    const store = makeStore();

    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.log(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found.');
        }

        const HTML = `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>React Redux Fullstack Starter</title>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6jEFGxOBYfshd8eD078NVu7jGHgf6Oo0"></script>
                </head>
                <body>
                    <div id="app"></div>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `;
        res.end(HTML);
    });
});

export default app;
