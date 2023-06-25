import React from "react";
import { useLocation } from "react-router-dom";
import BookmarkButton from "../components/BookmarkButton";
import "../App.css";

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
    <div className="h-screen flex items-center justify-center">
      <div className="w-[40vw] h-[80vh] bg-purple-900 rounded-lg overflow-hidden shadow-xl overflow-scroll overflow-x-hidden custom-scrollbar">
        <img
          className="w-full h-[40vh] object-contain"
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
        />
        <div className="absolute top-4 right-4">
          <BookmarkButton onClick={handleBookmarkClick} name={data.name} />
        </div>

        <div className="px-6 py-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-white">{data.name}</h1>
            <p className="text-gray-300 text-base">
              Species:{" "}
              <span className="text-gray-200">{data.species.name}</span>
            </p>
            <p className="text-gray-300 text-base">
              Height: <span className="text-gray-200">{data.height}</span>
            </p>
          </div>

          <div className="mb-4">
            {data.stats.map((obj) => (
              <div
                className="flex justify-between items-center mb-2"
                key={obj.stat.name}
              >
                <div className="text-gray-400">{obj.stat.name}</div>
                <div className="text-white font-semibold">{obj.base_stat}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-row justify-between">
            <div className="mr-4">
              <p className="font-semibold mb-1 text-gray-300">
                Abilities:{" "}
                <span className="text-gray-500">{data.abilities.length}</span>
              </p>
              {data.abilities.map((obj) => (
                <div key={obj.ability.name} className="text-gray-400">
                  {obj.ability.name}
                </div>
              ))}
            </div>

            <div>
              <p className="font-semibold mb-1 text-gray-300 text-left pl-4">
                Moves:{" "}
                <span className="text-gray-500">{data.moves.length}</span>
              </p>
              <div className="max-h-40 overflow-y-auto custom-scrollbar pr-4 pl-4">
                {data.moves.map((obj) => (
                  <div key={obj.move.name} className="text-gray-400 text-left">
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
