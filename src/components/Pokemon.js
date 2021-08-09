import PropTypes from 'prop-types';

const Pokemon = ({ key, pokeItem }) => {
  const { name, img } = pokeItem;
  // console.log('pokeItem', pokeItem);
  return (
    <div key={key} className="pokeItem">
      <img src={img} alt={`${name} Pokemon`} />
      <p className="pokeItem-name">{name}</p>
    </div>
  );
};
Pokemon.propTypes = {
  pokeItem: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  key: PropTypes.string.isRequired,
};
export default Pokemon;
