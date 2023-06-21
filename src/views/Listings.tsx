import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterOptions from "../components/FilterOptions";
import { useLocation } from "react-router-dom";
import SearchListItem from "../components/SearchListItem";

const Listings = () => {
  const location = useLocation();

  const [pokemonList, setPokemonList] = useState(location.state);
  const [pokemonState, setPokemonState] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMorePokemons = async () => {
    setIsLoading(true);
    let index = 1;
    console.log("hello");
    const pokemonDetailsArray = [];
    while (index <= 10 && index <= pokemonList.length) {
      await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonList[index - 1].name}`
      )
        .then((res) => res.json())
        .then((res) => pokemonDetailsArray.push(res));
      index = index + 1;
    }
    setPokemonState((prevState) => [...prevState, ...pokemonDetailsArray]);
    setPokemonList(() => pokemonList.slice(index - 1));
    setIsLoading(false);
  };

  console.log(pokemonState);
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
          <SearchListItem data={item} key={index} />
        </>
      ))}
      {pokemonList.length > 0 && <div>Loading...</div>}
    </div>
  );
};

export default Listings;
