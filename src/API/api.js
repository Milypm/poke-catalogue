import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const allGens = ['1', '2', '3', '4', '5', '6', '7', '8'];

const fetchPokemon = async (number) => {
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`, { mode: 'cors' });
  const data = await pokemonData.json();
  return data;
};

const getByGen = async (gen) => {
  const pokeObj = {
    name: '',
    image: '',
  };
  const pokeArr = [];
  const fetchData = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`, { mode: 'cors' });
  const data = await fetchData.json();
  const speciesArr = data.pokemon_species;
  const typesArr = data.types;
  const genTypes = typesArr.map((obj) => obj.name);
  speciesArr.forEach((el) => {
    const { url } = el;
    url.split('').reverse().shift();
    let number = '';
    let name;
    let image;
    url.forEach((el) => { number = el !== '/' ? `${number}el` : number; });
    number.split('').shift().join('');
    fetchPokemon(number).then((data) => {
      name = data.species.name;
      image = data.sprites.front_default;
    });
    pokeObj.name = name;
    pokeObj.image = image;
    pokeArr.push(pokeObj);
  });
  return pokeArr.unshift(genTypes);
};

const getByType = async (gen) => {
  const fetchData = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`, { mode: 'cors' });
  const data = await fetchData.json();
  const typesArr = data.types;
  if (typesArr.length !== 0) {

  }
  const speciesArr = data.pokemon_species;  
};

const fetchByGen = async (props) => {
  const { generationFilter, typeFilter, pokemons } = props;
  let allTypes = [
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
  ];
  let pokemonsArr = [];
  if (generationFilter === 'all') {
    allGens.forEach((el) => {
      getByGen(el).then((data) => { pokemonsArr.push(data.shift()); });
    });
  } else {
    getByGen(generationFilter).then((data) => {
      const [ types, pokeObj] = data;
      allTypes = types;
      pokemonsArr.push(data.shift());
    });
  }
  return pokemonsArr.unshift(allTypes);
};

const fetchByType = async (props) => {
  const { generationFilter, typeFilter } = props;
  if (generationFilter === 'all' && typeFilter === 'all') {
    allGens.forEach((el) => {
      getByType(el).then((data) => { pokemonsArr.push(data.shift()); });
    });
  } else if (generationFilter === 'all' && typeFilter !== 'all') {

  }
};
fetchByType.propTypes = {
  generationFilter: PropTypes.string.isRequired,
  typeFilter: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  generationFilter: state.generationFilter,
  typeFilter: state.typeFilter,
});
connect(mapStateToProps, null)(fetchByType);
export { fetchByGen, fetchByType };
