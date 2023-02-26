const Filter = ({ handleChange }) => {
  return (
    <>
      <p>Fild contacts by name</p>
      <label>Filter contacts</label>
      <input
        name="filter"
        onChange={handleChange}
        placeholder="Filter contact"
      />
    </>
  );
};

export default Filter;
