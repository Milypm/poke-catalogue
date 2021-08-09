import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPokemons } from '../API/api';
import Navbar from './Navbar';
import Pokemon from '../components/Pokemon';
import Loading from '../components/Loading';
import '../styles/home.css';

const Home = (props) => {
  const { generationFilter, typeFilter } = props;
  const [pokemonsList, setPokemonsList] = useState([]);
  useEffect(() => {
    fetchPokemons({ generationFilter, typeFilter }).then((data) => {
      setPokemonsList(data);
    });
  }, [generationFilter, typeFilter]);
  return (
    <div className="home">
      <Navbar />
      <section className="pokemon-list">
        <h1>Home</h1>
        <div className="pokemons-div">
          {
            pokemonsList.length === 0
              ? <Loading />
              : pokemonsList.map((pokeItem) => {
                console.log('pokeItem');
                return <Pokemon key={pokeItem.name} pokeItem={pokeItem} />;
              })
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
