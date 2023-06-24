import { useEffect, useState } from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterSearch = ({ heading, placeholder, suggestionsList }) => {
  const filtersContext = useFilterContext();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedChips, setSelectedChips] = useState([]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedChips((prevChips) => [...prevChips, suggestion]);
    setSearchText("");
    setSuggestions([]);

    if (heading === "Abilities") {
      filtersContext.setSelectedFilters({
        abilities: [...filtersContext.selectedFilters.abilities, suggestion],
        moves: filtersContext.selectedFilters.moves,
        names: filtersContext.selectedFilters.names,
      });
    } else {
      filtersContext.setSelectedFilters({
        abilities: filtersContext.selectedFilters.abilities,
        moves: [...filtersContext.selectedFilters.moves, suggestion],
        names: filtersContext.selectedFilters.names,
      });
    }
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      const mockSuggestions = suggestionsList.map((data) => data.name);
      const filteredSuggestions = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchText.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
    };

    fetchSuggestions();
  }, [searchText]);

  const handleChipClose = (chip) => {
    setSelectedChips((prevChips) => prevChips.filter((c) => c !== chip));
    if (heading === "Abilities") {
      filtersContext.setSelectedFilters({
        abilities: filtersContext.selectedFilters.abilities.filter(name => name !== chip),
        moves: filtersContext.selectedFilters.moves,
        names: filtersContext.selectedFilters.names,
      });
    } else {
      filtersContext.setSelectedFilters({
        abilities: filtersContext.selectedFilters.abilities,
        moves: filtersContext.selectedFilters.moves.filter(name => name !== chip),
        names: filtersContext.selectedFilters.names,
      });
    }
  };

  return (
    <>
      <div className="mb-4 bg-yellow-200 rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{heading}</h3>
      <div className="flex flex-wrap flex-col">
        {selectedChips.map((chip, index) => (
          <div
            key={index}
            className="bg-red-200 rounded-md px-2 py-1 m-1 flex items-center"
          >
            <span className="text-red-800">{chip}</span>
            <button
              className="ml-2 text-red-600 ml-auto"
              onClick={() => handleChipClose(chip)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <input
        className="w-full border border-gray-300 rounded-md px-4 py-2 mt-4 mb-2"
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={handleInputChange}
      />
      {searchText && suggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-md shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};


export default FilterSearch;