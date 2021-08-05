import types from './types';

export const initialState = {
  generationFilter: 'all',
  typeFilter: 'all',
  typeFilterByGen: [
    'All',
    'Normal',
    'Fighting',
    'Flying',
    'Poison',
    'Ground',
    'Rock',
    'Bug',
    'Ghost',
    'Steel',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Psychic',
    'Ice',
    'Dragon',
    'Dark',
    'Fairy',
  ],
};

export const getByGeneration = (value) => ({ type: types.GENERATION_FILTER, payload: value });

export const getByType = (value) => ({ type: types.TYPE_FILTER, payload: value });

// export const getDetails = (pokemon) => ({ type: types.POKEMON_DETAILS, payload: pokemon });
