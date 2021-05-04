// setting up the redux store
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducer from './rootReducer';

// putting logger and thunk middlewares in an array
const middlewares = [logger, thunk];

// creating the redux store
const store = createStore(combineReducer, applyMiddleware(...middlewares));

export default store;
