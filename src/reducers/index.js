import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-cycle
import bookReducer from './Book';

export default combineReducers({
  books: bookReducer,
});
