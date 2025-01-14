import React, { useState } from "react";
import CompareCard from "../../components/CompareCard";
import Poke from "../../assets/Poke.png";
import "../../App.css";
import Header from "../../components/Header";

const Compare = () => {
  const [pokemon1, setPokemon1] = useState("");
  const [pokemon2, setPokemon2] = useState("");
  const [pokemonData1, setPokemonData1] = useState(null);
  const [pokemonData2, setPokemonData2] = useState(null);

  const searchPokemon = async (pokemonName, setData) => {
    if (pokemonName.length === 0) return;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error searching for Pokémon:", error);
    }
  };

  const handlePokemon1Change = (event) => {
    setPokemon1(event.target.value);
  };

  const handlePokemon2Change = (event) => {
    setPokemon2(event.target.value);
  };

  const handleSearch = () => {
    searchPokemon(pokemon1.toLowerCase(), setPokemonData1);
    searchPokemon(pokemon2.toLowerCase(), setPokemonData2);
  };

    return (
      <div className="h-screen w-screen">
        <Header />

        {!(pokemonData1 && pokemonData2) && (
          <div
            className={`transition-transform duration-300 w-screen ${
              pokemonData1 && pokemonData2
                ? "flex mb-4 w-screen px-16 justify-between pt-4"
                : "flex flex-col w-[screen] justify-center h-screen pl-8"
            }`}
          >
            <div className="flex items-center">
              <input
                type="text"
                value={pokemon1}
                onChange={handlePokemon1Change}
                placeholder="Enter Pokémon 1"
                className="bg-slate-200 px-4 py-2 w-44 mb-4 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-neon shadow-2xl"
              />
            </div>
            <input
              type="text"
              value={pokemon2}
              onChange={handlePokemon2Change}
              placeholder="Enter Pokémon 2"
              className="bg-slate-200 px-4 py-2 w-44 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-neon"
            />

            <div className="w-[100%] flex animate-pulse cursor-pointer">
              <div
                onClick={handleSearch}
                className={`h-24 w-24 right-0 absolute flex items-center justify-center pr-8 ${
                  pokemonData1 && pokemonData2
                    ? "bottom-8"
                    : "top-1/2 transform -translate-y-1/2"
                } text-white font-semibold rounded-full hover:scale-110 transition-transform duration-300 shadow-2xl focus:outline-none`}
              >
                <img src={Poke} className="absolute h-24" alt="Pokeball" />
              </div>
            </div>
          </div>
        )}

        {/* <FaArrowLeft className="text-purple-500 text-3xl cursor-pointer" /> */}
        <div className="flex w-screen justify-between absolute bottom-16">
          {pokemonData1 && pokemonData2 && (
            <CompareCard data1={pokemonData1} data2={pokemonData2} />
          )}
          {pokemonData2 && pokemonData1 && (
            <CompareCard data1={pokemonData2} data2={pokemonData1} />
          )}
        </div>
      </div>
    );
};

export default Compare;
