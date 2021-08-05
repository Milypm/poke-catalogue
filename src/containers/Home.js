import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchByGen, fetchByType } from '../API/api';
import Navbar from './Navbar';
import Pokemon from '../components/Pokemon';

const Home = (props) => {
  const { generationFilter, typeFilter } = props;
  const [pokemonsList, setPokemonsList] = useState([]);
  useEffect(() => {
    setPokemonsList(typeFilter !== 'all' ? fetchByType(props).then((data) => data)
      : fetchByGen(generationFilter).then((data) => data));
  }, [generationFilter, typeFilter]);
  return (
    <div className="home">
      <Navbar />
      <section className="pokemon-list">
        <h1>Home</h1>
        <div className="pokemons-div">
          {
            pokemonsList.map((pokeItem) => (
              <Pokemon key={pokeItem.id} pokeItem={pokeItem} />
            ))
          }
        </div>
      </section>
    </div>
  );
};
Home.propTypes = {
  generationFilter: PropTypes.string.isRequired,
  typeFilter: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  generationFilter: state.generationFilter,
  typeFilter: state.typeFilter,
});
export default connect(mapStateToProps, null)(Home);
