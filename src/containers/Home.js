import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Pokemon from '../components/Pokemon';

const Home = (props) => {
  const { generationFilter, typeFilter} = props;
  const [pokemonsList, setPokemonsList] = useState([]);
  // useEffect(() => {
  //   if (generationFilter === 'all') 
  // });
  const home = 'Home';
  return (
    <div className="home">
      <Navbar />
      <section className="pokemon-list">
        <h1>{home}</h1>

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
