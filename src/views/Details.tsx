import React from "react";
import { useLocation } from "react-router-dom";
import BookmarkButton from "../components/BookmarkButton";

const Details = () => {
  const location = useLocation();
  const data = location.state;

  const handleBookmarkClick = () => {
    let pokemons = JSON.parse(localStorage.getItem("pokemons"));
    if (!pokemons) pokemons = [data.name];
    else {
      if (pokemons.filter((name) => name === data.name).length === 0)
        pokemons.push(data.name);
      else {
        pokemons = pokemons.filter((name) => name !== data.name);
      }
    }
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  };

  return (
    <div className="h-[100vh] w-[100vw] flex items-center">
      <div className="max-w-sm mx-auto bg-red-100 rounded-lg overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover"
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
        />
        <div className="absolute top-4 right-4">
          <BookmarkButton onClick={handleBookmarkClick} name={data.name} />
        </div>

        <div className="px-6 py-4">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-red-800">{data.name}</h1>
            <p className="text-gray-700 text-base">
              Species: {data.species.name}
            </p>
            <p className="text-gray-700 text-base">Height: {data.height}</p>
          </div>

          <div className="mb-4">
            {data.stats.map((obj) => (
              <div
                className="flex justify-between items-center mb-2"
                key={obj.stat.name}
              >
                <div className="text-gray-700">{obj.stat.name}</div>
                <div className="text-red-800 font-semibold">
                  {obj.base_stat}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between">
            <div className="mr-4">
              <p className="font-semibold mb-1 text-gray-700">
                Abilities: {data.abilities.length}
              </p>
              {data.abilities.map((obj) => (
                <div key={obj.ability.name} className="text-gray-500">
                  {obj.ability.name}
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold mb-1 text-gray-700">
                Moves: {data.moves.length}
              </p>
              <div className="max-h-40 overflow-y-auto">
                {data.moves.map((obj) => (
                  <div key={obj.move.name} className="text-gray-500">
                    {obj.move.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
