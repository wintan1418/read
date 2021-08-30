import { CREATE_BOOK, REMOVE_BOOK, FILTER_BOOK } from '../action-shade';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,

});

export const filterBook = id => ({
  type: FILTER_BOOK,
  payload: id,

});
