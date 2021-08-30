import { FILTER_BOOK } from '../action-shade/index';

export default (state = 'ALL', { type, payload }) => {
  switch (type) {
    case FILTER_BOOK:
      return payload;
    default:
      return state;
  }
};
