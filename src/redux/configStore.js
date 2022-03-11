import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import countries from './Country';
import details from './details';

const reducer = combineReducers({
  countries,
  details,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
