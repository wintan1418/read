import { CREATE_BOOK, REMOVE_BOOK, FILTER_BOOK } from '../action-shade';

export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,

});

export const filterBook = value => ({
  type: FILTER_BOOK,
  value,

});
