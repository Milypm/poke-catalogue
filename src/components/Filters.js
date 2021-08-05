import PropTypes from 'prop-types';

const Filters = (props) => {
  const {
    handleGenChange,
    handleTypeChange,
    filterGenValue,
    filterTypeValue,
    typeFilterByGen,
  } = props;
  const generations = ['All', '1', '2', '3', '4', '5', '6', '7', '8'];
  const types = [
    'All',
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
      <select className="select-generation" id="generation" name="generation" onChange={(e) => handleGenChange(e)} value={filterGenValue}>
        {
          generations.map((filterGen) => (
            <option key={filterGen} value={filterGen.toLowerCase()}>
              {filterGen}
            </option>
          ))
        }
      </select>
      <select className="select-type" id="generation" name="generation" onChange={(e) => handleTypeChange(e)} value={filterTypeValue}>
        {
          typesOptions.map((filterType) => (
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
  handleGenChange: PropTypes.func.isRequired,
  handleTypeChange: PropTypes.func.isRequired,
  filterGenValue: PropTypes.string.isRequired,
  filterTypeValue: PropTypes.string.isRequired,
  typeFilterByGen: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default Filters;
