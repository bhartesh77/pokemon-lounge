import { CircularProgress, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      }

      else {
        navigate('/listings', {state: response});
      }

      setPokemonData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {error && <p>Error: {error}</p>}
        </>
      )}
    </div>
  );
};

export default Search;
