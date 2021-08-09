import PropTypes from 'prop-types';
import '../styles/navbar.css';

const Filters = (props) => {
  const {
    handleGenChange,
    handleTypeChange,
    filterGenValue,
    filterTypeValue,
    typeFilterByGen,
  } = props;
  const generations = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const types = [
    'None',
    'Normal',
    'Fighting',
    'Flying',
    'Poison',
    'Ground',
    'Rock',
    'Bug',
    'Ghost',
    'Steel',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Psychic',
    'Ice',
    'Dragon',
    'Dark',
    'Fairy',
  ];
  const typesOptions = filterGenValue !== 'all' ? typeFilterByGen : types;
  return (
    <form className="filter-form">
      <div className="filter-div">
        <label className="label-filter">Generation</label>
        <select className="select-filter" id="generation" name="generation" onChange={(e) => handleGenChange(e)} value={filterGenValue}>
          {
            generations.map((filterGen) => (
              <option key={filterGen} className="option-filter" value={filterGen.toLowerCase()}>
                {filterGen}
              </option>
            ))
          }
        </select>
      </div>
      <div className="filter-div">
        <label className="label-filter">Type</label>
        <select className="select-filter" id="type" name="type" onChange={(e) => handleTypeChange(e)} value={filterTypeValue}>
          {
            typesOptions.map((filterType) => (
              <option key={filterType} className="option-filter" value={filterType.toLowerCase()}>
                {filterType}
              </option>
            ))
          }
        </select>
      </div>
    </form>
  );
};
Filters.propTypes = {
  handleGenChange: PropTypes.func.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  filterGenValue: PropTypes.string.isRequired,
  filterTypeValue: PropTypes.string.isRequired,
  typeFilterByGen: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Filters;
