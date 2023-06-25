import React, { useEffect, useState } from "react";

const FeaturedPokemons = () => {
  const [pokemonsList, setPokemonsList] = useState([]);

  const fetchPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    const pokemons = await Promise.all(
      data.results.map(async (obj) => {
        const res = await fetch(obj.url);
        const pokemonData = await res.json();
        return pokemonData;
      })
    );

    console.log("hello");
    setPokemonsList(pokemons);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log(pokemonsList);
  return (
    <div className="overflow-hidden mt-8">
      <div className="text-white text-lg font-medium">Featured Pokemons</div>
      <div className="flex overflow-hidden p-4">
        <div className="inline-flex animation-scroll-right-to-left">
          {pokemonsList.map((obj) => {
            const { id, sprites, name, types } = obj;
            const boxShadow = `0 6px 12px -4px rgba(107, 70, 193, 0.6), 0 1px 2px rgba(0, 0, 0, 0.1)`;

            return (
              <div key={id} className="flex bg-white rounded-3xl shadow-lg p-4 mr-4">
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
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{types[0].type.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPokemons;
