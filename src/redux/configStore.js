import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countries from './Country';

const reducer = combineReducers({
  countries,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
