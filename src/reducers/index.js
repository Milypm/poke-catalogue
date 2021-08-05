import { combineReducers } from 'redux';
import filtersReducer from './filters';
import typesOptionsReducer from './typesOptions';

const reducersCombine = combineReducers({
  generationFilter: filtersReducer,
  typeFilter: filtersReducer,
  typeFilterByGen: typesOptionsReducer,
});
export default reducersCombine;
