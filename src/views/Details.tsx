import React from "react";
import { useLocation } from "react-router-dom";
import BookmarkButton from "../components/BookmarkButton";

const Details = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="max-w-sm mx-auto bg-white rounded overflow-hidden shadow-lg my-8">
      <img
        className="w-full h-full object-cover"
        src={data.sprites.other["official-artwork"].front_default}
        alt={data.name}
      />
      <div style={{position: "absolute", top: '20px', right: '20px'}}><BookmarkButton /></div>
      
      <div className="px-6 py-4">
        <div className="mb-2">
          <h1 className="text-xl font-bold">{data.name}</h1>
          <p className="text-gray-700 text-base">Species: {data.species.name}</p>
          <p className="text-gray-700 text-base">Height: {data.height}</p>
        </div>

        <div className="mb-4">
          {data.stats.map((obj) => (
            <div className="flex justify-between items-center mb-2" key={obj.stat.name}>
              <div className="text-gray-700">{obj.stat.name}</div>
              <div className="text-gray-900 font-semibold">{obj.base_stat}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-between">
          <div className="mr-4">
            <p className="font-semibold mb-1">Abilities: {data.abilities.length}</p>
            {data.abilities.map((obj) => (
              <div key={obj.ability.name}>{obj.ability.name}</div>
            ))}
          </div>

          <div>
            <p className="font-semibold mb-1">Moves: {data.moves.length}</p>
            <div className="max-h-40 overflow-y-auto">
              {data.moves.map((obj) => (
                <div key={obj.move.name}>{obj.move.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
