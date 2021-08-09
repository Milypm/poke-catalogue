import { initialState } from '../actions';
import { getTypesOptions } from '../API/api';
import types from '../actions/types';

const typesOptionsReducer = (state = initialState.typeFilterByGen, action) => {
  switch (action.type) {
    case types.GENERATION_FILTER:
      const typesArr = getTypesOptions(action.payload).then((data) => data);
      return typesArr;
    default:
      return state;
  }
};
export default typesOptionsReducer;
