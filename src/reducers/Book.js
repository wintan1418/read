/* eslint-disable import/named */
import { CREATE_BOOK, REMOVE_BOOK } from '../action-shade/index';
import { defaultBooks } from '../list';

export default (state = defaultBooks, { type, payload }) => {
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== payload);
    default:
      return state;
  }
};
