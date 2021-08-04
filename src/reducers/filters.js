import { initialState } from '../actions';
import types from '../actions/types';

const filtersReducer = (state = initialState.pokemons, action) => {
  switch(action.type) {
    case types.GENERATION_FILTER:
      
  }
};
export default filtersReducer;
