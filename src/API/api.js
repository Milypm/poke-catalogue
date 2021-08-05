import PropTypes from 'prop-types';

const allGens = ['1', '2', '3', '4', '5', '6', '7', '8'];
let pokemonsArr = [];
const pokeArr = [];

const getPokemonSpecies = async (gen) => {
  const fetchData = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`, { mode: 'cors' });
  const data = await fetchData.json();
  const speciesArr = data.pokemon_species;
  return speciesArr;
};

const getTypesOptions = async (gen) => {
  const fetchData = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`, { mode: 'cors' });
  const data = await fetchData.json();
  const [...types] = data.types;
  const typesArr = [...types].length > 0 ? [...types].map((e) => e.name) : [];
  return typesArr;
};

const fetchPokemonGen = async (name) => {
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, { mode: 'cors' });
  const data = await pokemonData.json();
  const { sprites } = data;
  const image = sprites.front_default;
  return image;
};

const getByGen = async (gen) => {
  const pokeObj = {
    name: '',
    image: '',
  };
  const speciesArr = await getPokemonSpecies(gen).then((data) => data);
  speciesArr.forEach((el) => {
    const { name } = el;
    // const splitUrl = url.split('');
    // const reverseUrl = splitUrl.reverse();
    // reverseUrl.shift();
    // const indexOfSlash = reverseUrl.indexOf('/');
    // let number = reverseUrl.slice(0, indexOfSlash).join('');
    // number = number === '018' ? '18' : number;
    // number = number === '056' ? '56' : number;
    const img = fetchPokemonGen(name).then((data) => data);
    pokeObj.name = name;
    pokeObj.image = img;
  });
  return pokeObj;
};

const fetchByGen = async (generationFilter) => {
  console.log('Entering fetchByGen function!');
  if (generationFilter === 'all') {
    allGens.forEach((el) => {
      getByGen(el).then((data) => { pokemonsArr.push(data); });
    });
  } else {
    const pokemons = getByGen(generationFilter).then((data) => data);
    pokemonsArr.push(pokemons);
  }
  console.log('pokemonsArr', pokemonsArr);
  return pokemonsArr;
};

const fetchPokemonType = async (url) => {
  const pokeObj = {
    name: '',
    image: '',
  };
  const pokemonData = await fetch(url, { mode: 'cors' });
  const data = await pokemonData.json();
  const speciesArr = data.pokemon_species;
  speciesArr.forEach((el) => {
    const { url } = el;
    url.split('').reverse().shift();
    let number = '';
    let name;
    let image;
    url.forEach((el) => { number = el !== '/' ? `${number}el` : number; });
    number.split('').shift().join('');
    fetchPokemonGen(number).then((data) => {
      name = data.species.name;
      image = data.sprites.front_default;
    });
    pokeObj.name = name;
    pokeObj.image = image;
    pokeArr.push(pokeObj);
  });
  return pokeArr;
};

const fetchByType = async (props) => {
  const { generationFilter, typeFilter } = props;
  const gensWithNoTypes = ['4', '5', '7', '8'];
  if (gensWithNoTypes.includes(generationFilter)) {
    pokemonsArr = fetchByGen(generationFilter).then((data) => data);
  } else {
    const fetchData = await fetch(`https://pokeapi.co/api/v2/generation/${generationFilter}/`, { mode: 'cors' });
    const data = await fetchData.json();
    const [...types] = data.types;
    const pickedType = [...types].filter((obj) => obj.name === typeFilter);
    const { typeObj } = pickedType;
    pokemonsArr = fetchPokemonType(typeObj.url).then((data) => data);
  }
  return pokemonsArr;
};
fetchByType.propTypes = {
  generationFilter: PropTypes.string.isRequired,
  typeFilter: PropTypes.string.isRequired,
};
export { fetchByGen, fetchByType, getTypesOptions };
