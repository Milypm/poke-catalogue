import types from './types';
import { fetchByGen } from '../API/api';

export const initialState = {
  generationFilter: 'all',
  typeFilter: 'all',
  typeFilterByGen: [
    'normal',
    'fighting',
    'flying',
    'poison',
    'ground',
    'rock',
    'bug',
    'ghost',
    'steel',
    'fire',
    'water',
    'grass',
    'electric',
    'psychic',
    'ice',
    'dragon',
    'dark',
    'fairy',
  ],
  pokemons: fetchByGen(generationFilter).then((data) => {
    return data;
  })
};

export const getByGeneration = (pokemons) => ({ type: types.GENERATION_FILTER, payload: pokemons });

export const getByType = (pokemons) => ({ type: types.TYPE_FILTER, payload: pokemons });

export const getDetails = (pokemon) => ({ type: types.POKEMON_DETAILS, payload: pokemon });