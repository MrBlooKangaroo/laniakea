﻿import { applyMiddleware, combineReducers, createStore } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'

import * as Studies from './Studies'

export default function configureStore(history, initialState) {
    const reducers = {
        studies: Studies.reducer
    }

    const middleware = [
        thunk,
        routerMiddleware(history)
    ]

    const enhancers = []

    const rootReducer = combineReducers({
        ...reducers,
        routing: routerReducer
    })

    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
    )
}
