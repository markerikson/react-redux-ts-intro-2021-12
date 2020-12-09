import {createStore, applyMiddleware} from "redux";

// Middleware written as ES5 functions
function middleware1(storeAPI) {
    return function(next) {
        return function(action) {
            // Do anything here: pass the action onwards with next(action),
            // or restart the pipeline with storeAPI.dispatch(action)
            // Can also use storeAPI.getState() here
        }
    }
}

// Same thing, but written as ES6 arrow functions:
const middleware2 = storeAPI => next => action => {
    // Do work here
}

const logger = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', storeAPI.getState())
    return result
}

const middlewareEnhancer = applyMiddleware(middleware1, middleware2, logger)
const store = createStore(rootReducer, preloadedState, middlewareEnhancer);