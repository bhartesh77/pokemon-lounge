import { CircularProgress, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { GiPokecog } from "react-icons/gi";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (pokemonName.trim() === "") {
      setError("Please enter a Pokémon name");
      return;
    }

    setIsLoading(true);
    setError("");
    setPokemonData([]);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1281`
      )
        .then((res) => res.json())
        .then((res) => {
          return res.results.filter((obj) =>
            obj.name.startsWith(pokemonName.toLowerCase())
          );
        });

      if (response.length === 0) {
        throw new Error("Pokémon not found");
      } else {
        navigate("/listings", { state: response });
      }

      setPokemonData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center space-x-4 mb-8">
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
          className="px-4 py-2 bg-white rounded-md shadow-md text-gray-800 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none"
        >
          <BiSearch className="mr-2 text-lg" />
          Search
        </button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center">
          <CircularProgress className="text-yellow-500" />
        </div>
      ) : (
        <>
          {error && (
            <p className="text-2xl font-bold text-red-700">Error: {error}</p>
          )}
        </>
      )}

      <div className="mt-12 text-3xl text-white">
        <GiPokecog />
      </div>
    </div>
  );
};

export default Search;
