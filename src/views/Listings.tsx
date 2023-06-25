import React, { useState, useRef, useEffect } from "react";
import FilterOptions from "../components/FilterOptions";
import { useLocation } from "react-router-dom";
import SearchListItem from "../components/SearchListItem";
import { CircularProgress } from "@mui/material";
import FilterContextProvider from "../context/FilterContext";

const Listings = () => {
  const location = useLocation();
  const divScrollRef = useRef(null);
  const [pokemonList, setPokemonList] = useState(location.state);
  const [pokemonState, setPokemonState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    abilities: [],
    moves: [],
    names: location.state,
  });
  const [refetch, setRefetch] = useState(false);

  const fetchMorePokemons = async () => {
    setIsLoading(true);
    let index = 1;
    const pokemonDetailsArray = [];

    while (pokemonDetailsArray.length < 10 && index <= pokemonList.length) {
      await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonList[index - 1].name}`
      )
        .then((res) => res.json())
        .then((res) => {
          const newAbilities = res.abilities.map((el) => el.ability.name);
          const newMoves = res.moves.map((el) => el.move.name);

          const allAbilitiesPresent =
            selectedFilters.abilities.filter((element) =>
            newAbilities.includes(element)
            ).length === selectedFilters.abilities.length;

          const allMovesPresent =
            selectedFilters.moves.filter((element) =>
              newMoves.includes(element)
            ).length === selectedFilters.moves.length;

          if (allAbilitiesPresent && allMovesPresent) {
            console.log("hello");
            pokemonDetailsArray.push(res);
          }
        });
      index = index + 1;
    }
    setPokemonState((prevState) => [...prevState, ...pokemonDetailsArray]);
    setPokemonList(() => pokemonList.slice(index - 1));
    setIsLoading(false);
  };

  useEffect(() => {
    if (!refetch) return;
    fetchMorePokemons();
    setRefetch(false);
  }, [refetch]);

  useEffect(() => {
    setRefetch(true);
    setPokemonList(() => selectedFilters.names);
    setPokemonState(() => []);
  }, [selectedFilters]);

  const handleScroll = () => {
    const scrollHeight = divScrollRef.current.scrollHeight;
    const clientHeight = divScrollRef.current.clientHeight;
    const scrollTop = divScrollRef.current.scrollTop || document.body.scrollTop;

    const scrollableHeight = scrollHeight - clientHeight;
    const percentage = (scrollTop / scrollableHeight) * 100;

    if (percentage < 100 || isLoading || pokemonList.length === 0) {
      return;
    }
    fetchMorePokemons();
  };

  useEffect(() => {
    const divElement = divScrollRef.current;
    divElement.addEventListener("scroll", handleScroll);
    return () => divElement.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <FilterContextProvider
      values={{
        selectedFilters: selectedFilters,
        setSelectedFilters: setSelectedFilters,
      }}
    >
      <div className="flex flex-row h-[100vh] w-[100vw]">
        <div
          ref={divScrollRef}
          className="h-[100vh] overflow-scroll overflow-x-hidden w-[100vw] items-center flex flex-col pt-8"
        >
          <div className="fixed left-8">
            <FilterOptions />
          </div>
          {pokemonState.map((item, index) => (
            <>
              <SearchListItem data={item} key={index} />
            </>
          ))}
          {pokemonList.length > 0 && <CircularProgress />}
        </div>
      </div>
    </FilterContextProvider>
  );
};

export default Listings;

{
  /* <div className="flex flex-row">
      <div className="m-8"><FilterOptions /></div>
      <div className="h-[100vh] overflow-scroll overflow-x-hidden w-[100vw] items-center flex flex-col pt-8">
        {pokemonState.map((item, index) => (
          <>
            <SearchListItem data={item} key={index} />
          </>
        ))}
        {pokemonList.length > 0 && <CircularProgress />}
      </div>
    </div> */
}
