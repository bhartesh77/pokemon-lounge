import React, { useEffect, useState } from "react";
import SearchListItem from "../components/SearchListItem";
import { CircularProgress } from "@mui/material";

const Bookmarks = () => {
  const [pokemonList, setPokemonList] = useState(
    JSON.parse(localStorage.getItem("pokemons"))
  );
  const [pokemonState, setPokemonState] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMorePokemons = async () => {
    setIsLoading(true);
    let index = 1;
    const pokemonDetailsArray = [];
    while (index <= 10 && index <= pokemonList.length) {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList[index - 1]}`)
        .then((res) => res.json())
        .then((res) => pokemonDetailsArray.push(res));
      index = index + 1;
    }
    setPokemonState((prevState) => [...prevState, ...pokemonDetailsArray]);
    setPokemonList(() => pokemonList.slice(index - 1));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMorePokemons();
  }, []);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    const scrollableHeight = scrollHeight - clientHeight;
    const percentage = (scrollTop / scrollableHeight) * 100;

    if (percentage < 50 || isLoading || pokemonList.length === 0) {
      return;
    }
    fetchMorePokemons();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <div>
      {pokemonState.map((item, index) => (
        <>
          <SearchListItem data={item} key={`searchListItem${index}`} />
        </>
      ))}
      {pokemonList.length > 0 && <CircularProgress />}
    </div>
  );
};

export default Bookmarks;
