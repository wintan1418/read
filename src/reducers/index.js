import { combineReducers } from 'redux';
import bookReducer from './Book';

export default combineReducers({
  books: bookReducer,
});
