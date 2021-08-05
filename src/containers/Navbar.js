import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getByGeneration, getByType } from '../actions/index';
import Filters from '../components/Filters';
import '../styles/navbar.css';

const Navbar = (props) => {
  const { generationFilter, typeFilter, typeFilterByGen } = props;
  const handleGenChange = (e) => {
    props.getByGeneration(e.target.value);
  };
  const handleTypeChange = (e) => {
    props.getByType(e.target.value);
  };
  return (
    <navbar className="navbar">
      <div className="title-filters">
        <h3>PokeFetch!</h3>
        <Filters
          handleGenChange={handleGenChange}
          handleTypeChange={handleTypeChange}
          filterGenValue={generationFilter}
          filterTypeValue={typeFilter}
          typeFilterByGen={typeFilterByGen}
        />
      </div>
    </navbar>
  );
};
Navbar.propTypes = {
  generationFilter: PropTypes.string.isRequired,
  typeFilter: PropTypes.string.isRequired,
  typeFilterByGen: PropTypes.arrayOf(PropTypes.any).isRequired,
  getByGeneration: PropTypes.func.isRequired,
  getByType: PropTypes.func.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
