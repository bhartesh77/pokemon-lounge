const FilterOptions = ({ filterAbilities, setFilterAbilities }) => {
  const handleAbilityChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilterAbilities((prevAbilities) => [...prevAbilities, value]);
    } else {
      setFilterAbilities((prevAbilities) =>
        prevAbilities.filter((ability) => ability !== value)
      );
    }
  };

  return (
    <div>
      <h3>Filter by Abilities:</h3>
      <label>
        <input
          type="checkbox"
          value="ability1"
          checked={filterAbilities.includes("ability1")}
          onChange={handleAbilityChange}
        />
        Ability 1
      </label>
      <label>
        <input
          type="checkbox"
          value="ability2"
          checked={filterAbilities.includes("ability2")}
          onChange={handleAbilityChange}
        />
        Ability 2
      </label>
      {/* Add more checkboxes for other abilities */}
    </div>
  );
};

export default FilterOptions;
