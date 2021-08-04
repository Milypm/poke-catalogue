import React from 'react';
import Filters from '../containers/Filters';
// import Search from '../containers/Search';
import '../styles/navbar.css';

const Navbar = () => {
  const title = 'PokeFetch';
  return (
    <navbar className="navbar">
      <div className="title-filters">
        <h3>{title}</h3>
        <Filters />
        {/* <Search /> */}
      </div>
    </navbar>
  );
};

export default Navbar;
