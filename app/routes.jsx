import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './Pages/App';
import Home from './Pages/Home';
import About from './Pages/About';
import Board from './Pages/Board';
import Weather from './Pages/Weather';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={About} path="about" />
        <Route component={Board} path="board" />
        <Route component={Weather} path="Weather" />
    </Route>
);
