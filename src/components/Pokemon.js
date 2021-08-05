import PropTypes from 'prop-types';

const Pokemon = ({ pokeItem }) => {
  const { name, image } = pokeItem;
  return (
    <div className="pokeItem">
      <img src={image} alt={`${name} Pokemon`} />
      <p className="pokeItem-name">{name}</p>
    </div>
  );
};
Pokemon.propTypes = {
  pokeItem: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
export default Pokemon;
