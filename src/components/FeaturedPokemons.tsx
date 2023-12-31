import React, { useEffect, useState } from "react";
import isMobile from "../utils/isMobile";

const FeaturedPokemons = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

  const fetchPokemons = async () => {
    const data = [
      "charizard",
      "pikachu",
      "eevee",
      "gengar",
      "dragonite",
      "lucario",
      "gardevoir",
      "blaziken",
      "umbreon",
      "greninja",
    ];

    const pokemons = await Promise.all(
      data.map(async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const pokemonData = await res.json();
        return pokemonData;
      })
    );

    setPokemonsList(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (isMobile())
    return (
      <div className="overflow-hidden absolute bottom-0 w-[100vw] overflow-hidden">
        {pokemonsList.length > 0 && (
          <div className="text-white text-lg font-semibold pl-4">
            Featured Pokemons
          </div>
        )}
        <div className="flex overflow-hidden p-4">
          <div className="overflow-hidden rounded-full">
            <div className="inline-flex animation-scroll-right-to-left overflow-hidden">
              {pokemonsList.map((obj) => {
                const { id, sprites, name, types } = obj;
                const boxShadow = `0 6px 12px -4px rgba(107, 70, 193, 0.6), 0 1px 2px rgba(0, 0, 0, 0.1)`;

                return (
                  <div
                    key={id}
                    className="flex bg-white rounded-full shadow-lg p-4 mr-4"
                  >
                    <div
                      className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 flex items-center justify-center"
                      style={{ boxShadow }}
                    >
                      <img
                        src={sprites.front_default}
                        className="object-cover h-20 w-20"
                        alt={name}
                      />
                    </div>
                    <div className="flex flex-col justify-center p-4">
                      <div className="text-xl font-semibold text-slate-900">
                        {name}
                      </div>
                      <div className="text-gray-500">{types[0].type.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="overflow-hidden mt-8 absolute bottom-0">
      {pokemonsList.length > 0 && (
        <div className="text-white text-lg font-semibold">
          Featured Pokemons
        </div>
      )}
      <div className="flex overflow-hidden p-4">
        <div className="overflow-hidden rounded-full">
          <div className="inline-flex animation-scroll-right-to-left">
            {pokemonsList.map((obj) => {
              const { id, sprites, name, types } = obj;
              const boxShadow = `0 6px 12px -4px rgba(107, 70, 193, 0.6), 0 1px 2px rgba(0, 0, 0, 0.1)`;

              return (
                <div
                  key={id}
                  className="flex bg-white rounded-full shadow-lg p-4 mr-4"
                >
                  <div
                    className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-800 to-purple-600 flex items-center justify-center"
                    style={{ boxShadow }}
                  >
                    <img
                      src={sprites.front_default}
                      className="object-cover h-20 w-20"
                      alt={name}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-4">
                    <div className="text-xl font-semibold text-slate-900">
                      {name}
                    </div>
                    <div className="text-gray-500">{types[0].type.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPokemons;
