// import React, { useState } from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getByGeneration, getByType, getByGenAndType } from '../actions/index';
import { fetchByGen, fetchByType } from '../API/api';

const Filters = (props) => {
  const { generationFilter, typeFilter, typeFilterByGen } = props;
  const generations = ['All', '1', '2', '3', '4', '5', '6', '7', '8'];
  const types = [
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
  const filterTypes = generationFilter === 'all' ? types : typeFilterByGen;
  const handleGenChange = (e) => {
    props.getByGeneration(e.target.value);
  };
  const handleTypeChange = (e) => {
    props.getByType(e.target.value);
  };
  return (
    <form className="filter-form">
      <select className="select-generation" id="generation" name="generation" onChange={(e) => handleGenChange(e)}>
        {
          generations.map((filterGen) => (
            <option key={filterGen} value={filterGen.toLowerCase()}>
              {filterGen}
            </option>
          ))
        }
      </select>
      <select className="select-type" id="generation" name="generation" onChange={(e) => handleTypeChange(e)}>
        {
          filterTypes.map((filterType) => (
            <option key={filterType} value={filterType.toLowerCase()}>
              {filterType}
            </option>
          ))
        }
      </select>
    </form>
  );
};
Filters.propTypes = {
  generationFilter: PropTypes.string.isRequired,
  typeFilter: PropTypes.string.isRequired,
  typeFilterByGen: state.typeFilterByGen,
};
const mapStateToProps = (state) => ({
  generationFilter: state.generationFilter,
  typeFilter: state.typeFilter,
  typeFilterByGen: state.typeFilterByGen,
});
const mapDispatchToProps = (dispatch) => ({
  getByGeneration: (filter) => {
    dispatch(getByGeneration(filter));
  },
  getByType: (filter) => {
    dispatch(getByType(filter));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
