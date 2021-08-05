import { initialState } from '../actions';
import types from '../actions/types';

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GENERATION_FILTER:
      return action.payload;
    case types.TYPE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
export default filtersReducer;
