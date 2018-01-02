import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Board from './components/Board';

export default (
    <Route component={App} path="/">
        <IndexRoute component={Home} />
        <Route component={About} path="about" />
        <Route component={Board} path="board" />
    </Route>
);
