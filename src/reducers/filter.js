import { FILTER_BOOK } from '../action-shade/index';

export default (state = 'All', action) => {
  switch (action.type) {
    case FILTER_BOOK:
      return action.value;
    default:
      return state;
  }
};
