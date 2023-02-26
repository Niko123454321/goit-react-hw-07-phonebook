const Filter = ({ handleChange }) => {
  return (
    <input name="filter" onChange={handleChange} placeholder="Filter contact" />
  );
};

export default Filter;
