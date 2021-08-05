import React from 'react';
import Navbar from '../containers/Navbar';

const PokemonDetail = () => {
  const home = 'Home';
  return (
    <div className="home">
      <Navbar />
      <h1>{home}</h1>
    </div>
  );
};

export default PokemonDetail;
