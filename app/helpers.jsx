import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from 'reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export function makeStore(state = {}) {
    const reducer = combineReducers(reducers);
    return createStore(reducer, state,  composeWithDevTools(applyMiddleware(thunk)));
}
