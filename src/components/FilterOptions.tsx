import React, { useState, useEffect } from "react";
import { AiOutlineFilter } from "react-icons/ai";
import FilterSearch from "./FilterSearch";

const FilterOptions = () => {
  const [abilitiesList, setAbilitiesList] = useState([]);
  const [movesList, setMovesList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/ability/?limit=358&offset=0")
      .then((res) => res.json())
      .then((res) => setAbilitiesList(res.results));

    fetch("https://pokeapi.co/api/v2/move/?limit=358&offset=0")
      .then((res) => res.json())
      .then((res) => setMovesList(res.results));
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-md bg-slate-900">
      <h2 className="flex items-center text-2xl font-bold mb-4">
        <AiOutlineFilter className="filter-icon mr-2" /> Filters
      </h2>
      <FilterSearch
        heading={"Moves"}
        placeholder={"Enter moves"}
        suggestionsList={movesList}
      />
      <FilterSearch
        heading={"Abilities"}
        placeholder={"Enter abilities"}
        suggestionsList={abilitiesList}
      />
    </div>
  );
};

export default FilterOptions;
