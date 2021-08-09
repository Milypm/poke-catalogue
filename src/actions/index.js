import types from './types';

export const initialState = {
  generationFilter: '1',
  typeFilter: 'none',
  typeFilterByGen: [
    'None',
    'Normal',
    'Fighting',
    'Flying',
    'Poison',
    'Ground',
    'Rock',
    'Bug',
    'Ghost',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Psychic',
    'Ice',
    'Dragon',
  ],
};

export const getByGeneration = (value) => ({ type: types.GENERATION_FILTER, payload: value });

export const getByType = (value) => ({ type: types.TYPE_FILTER, payload: value });

// export const getDetails = (pokemon) => ({ type: types.POKEMON_DETAILS, payload: pokemon });
