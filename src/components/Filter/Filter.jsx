import PropTypes from 'prop-types';
const Filter = ({ onInputChange, filter }) => {
  return (
    <>
      <p>Fild contacts by name</p>
      <input
        name="filter"
        onChange={onInputChange}
        value={filter}
        type="text"
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
