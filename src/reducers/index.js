import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-cycle
import bookReducer from './Book';
import filterReducer from './filter';

export default combineReducers({
  books: bookReducer,
  filter: filterReducer,
});
