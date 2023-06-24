import React from "react";
import { useNavigate } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";

const SearchListItem = ({ data }) => {
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

  const navigate = useNavigate();
  return (
    <div
      className="border border-gray-300 rounded-lg p-4 shadow-md mb-4 h-56 w-64 flex justify-center flex-col cursor-pointer bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300"
      onClick={() => navigate("/details", { state: data })}
    >
      <div className="text-center font-bold text-xl text-gray-800">
        {data.name}
      </div>
      <img
        src={data.sprites.front_default}
        alt={data.name}
        className="mx-auto mb-4"
      />
      <BookmarkButton
        onClick={handleBookmarkClick}
        name={data.name}
      />
    </div>
  );
};

export default SearchListItem;
