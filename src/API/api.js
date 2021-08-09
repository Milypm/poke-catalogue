import PropTypes from 'prop-types';

const notFound = [
  'deoxys',
  'wormadam',
  'giratina',
  'shaymin',
  'basculin',
  'darmanitan',
  'thundurus',
  'tornadus',
  'landorus',
  'meloetta',
  'keldeo',
  'eiscue',
  'indeedee',
  'zacian',
  'zamazenta',
  'toxtricity',
  'urshifu',
  'aegislash',
  'pumpkaboo',
  'meowstic',
  'gourgeist',
  'oricorio',
  'lycanroc',
  'wishiwashi',
  'minior',
  'mimikyu',
];

const getPokemonSpecies = async (gen) => {
  const fetchData = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`, { mode: 'cors' });
  const data = await fetchData.json();
  const speciesArr = data.pokemon_species;
  return speciesArr;
};

const getTypesOptions = async (gen) => {
  const fetchData = await fetch(`https://pokeapi.co/api/v2/generation/${gen}/`, { mode: 'cors' });
  const data = await fetchData.json();
  const [types] = data.types;
  const typesArr = types.length > 0 ? types.map((e) => e.name) : [];
  return typesArr;
};

const fetchPokemonGen = async (name) => {
  const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`, { mode: 'cors' });
  const data = await pokemonData.json();
  const { species, sprites } = data;
  const pokemon = species.name;
  const image = sprites.front_default;
  const pokeObj = {
    name: '',
    img: '',
  };
  pokeObj.name = pokemon;
  pokeObj.img = image;
  return pokeObj;
};

const fetchPokemons = async (props) => {
  const { generationFilter, typeFilter } = props;
  const gensWithNoTypes = ['4', '5', '7', '8'];
  const pokemonsArr = [];
  let pokemonsObj;
  if (typeFilter === 'None') {
    const speciesArr = getPokemonSpecies(generationFilter).then((data) => data);
    speciesArr.forEach((el) => {
      const { name } = el;
      if (!notFound.includes(name)) {
        pokemonsObj = fetchPokemonGen(name).then((data) => data);
        pokemonsArr.push(pokemonsObj);
      }
    });
  } else if (typeFilter !== 'None') {
    if (!gensWithNoTypes.includes(generationFilter)) {
      let typesArr = await fetch(`https://pokeapi.co/api/v2/generation/${generationFilter}/`, { mode: 'cors' });
      let data = await typesArr.json();
      const [types] = data.types;
      typesArr = await fetch(types.url, { mode: 'cors' });
      data = await typesArr.json();
      const [...pokemons] = data.pokemon;
      const pokesNamesArr = [...pokemons].map((obj) => obj.pokemon.name);
      pokesNamesArr.forEach((el) => {
        if (!notFound.includes(el)) {
          pokemonsObj = fetchPokemonGen(el).then((data) => data);
          pokemonsArr.push(pokemonsObj);
        }
      });
    } else {
      const speciesArr = getPokemonSpecies(generationFilter).then((data) => data);
      speciesArr.forEach((el) => {
        const { name } = el;
        if (!notFound.includes(name)) {
          pokemonsObj = fetchPokemonGen(name).then((data) => data);
          pokemonsArr.push(pokemonsObj);
        }
      });
    }
  }
  return pokemonsArr;
};
fetchPokemons.propTypes = {
  generationFilter: PropTypes.string.isRequired,
  typeFilter: PropTypes.string.isRequired,
};
export {
  fetchPokemons,
  getTypesOptions,
};
