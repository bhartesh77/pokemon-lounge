import React from "react";
import { useNavigate } from "react-router-dom";

const SearchListItem = ({ data }) => {

  const navigate = useNavigate();
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md mb-4 h-56 w-64 flex justify-center flex-col" onClick={() => navigate('/details', {state: data})}>
      <img
        src={data.sprites.front_default}
        alt={data.name}
        className="mx-auto mb-4"
      />
      <div className="text-center font-bold text-xl">{data.name}</div>
    </div>
  );
};

export default SearchListItem;
