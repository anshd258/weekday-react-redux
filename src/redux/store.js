import { configureStore, applyMiddleware, compose, Tuple } from "@reduxjs/toolkit";
import { jobReducer } from "./reducers/jobreducer";
import { thunk } from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
    reducer: {
        alljobs: jobReducer
    }, middleware: () => new Tuple(thunk), devTools: composeEnhancers(applyMiddleware(thunk))
});

export default store;