import { FILTER_BOOKS } from '../action-shade/index';

export default (state = 'ALL', { type, payload }) => {
  switch (type) {
    case FILTER_BOOKS:
      return payload;
    default:
      return state;
  }
};
