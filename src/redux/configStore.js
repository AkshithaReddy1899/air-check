import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import air from './air';

const reducer = combineReducers({
  air,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
