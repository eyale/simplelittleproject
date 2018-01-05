import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'routes';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import 'css/master.scss';

const history = createBrowserHistory();

let initialState = window.__INITIAL_STATE__;

const store = makeStore();

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('app'));
