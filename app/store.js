import { createStore, applyMiddleware, compose, combineReducer } from 'redux'
import { routerMiddleware } from 'react-router-redux'
//import { persistState } from 'redux-devtools'
//import DevTools from './DevTools'

function createAppStore(history, reducers, middlewares = []) {
    const logMiddleware = store => next => action => {
        //console.log("logMiddleware", action, store)
        return next(action)
    }

    const thunkMiddleware = ({ dispatch, getState }) => next => action => {
        if (typeof action != 'function')
            return next(action)

        //console.log("thunkMiddleware", action)
        return action(dispatch, getState)
    }

    const enhancer = compose(
        applyMiddleware(logMiddleware, thunkMiddleware, ...middlewares, routerMiddleware(history)),
        window && window.devToolsExtension ? window.devToolsExtension(): f => f)
        /*
        DevTools.instrument(),
        persistState((() => {
            const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
            return (matches && matches.length > 0)? matches[1] : null;
        })()))
        */
    return createStore(reducers, {}, enhancer);
}

export default createAppStore;
