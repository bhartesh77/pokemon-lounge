import React from "react";

const SearchListItem = ({ data }): React.ReactNode => {
  return (
    <div
      style={{
        width: "90vw",
        height: "fit-content",
        borderRadius: "8px",
        marginBottom: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={data.sprites.front_default} />
      <div>{data.name}</div>
    </div>
  );
};

export default SearchListItem;
