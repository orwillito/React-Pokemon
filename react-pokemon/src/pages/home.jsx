import React, { useEffect, useState, useContext, useMemo } from "react";
import PokemonCard from "../components/pokemon-card.component";
import { getPokemons } from "../utils/fetch";

import {
  MainContainer,
  LeftContentContainer,
  RightContentContainer,
  SearchContainer,
} from "../components/pokemon-card.styled";
import PokemonProfile from "../components/pokemon-profile.component";

const Home = () => {
  const [pokemons, setPokemons] = useState();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokeProfile, setPokeProfile] = useState();

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  const filtered = useMemo(() => {
    return pokemons?.filter((pokemon) => {
      return searchPokemon.length > 0
        ? pokemon.name.includes(searchPokemon)
        : true;
    });
  }, [searchPokemon, pokemons]);

  const handleChange = (e) => {
    setSearchPokemon(e.target.value.toLowerCase());
  };

  return (
    <>
      <h1>Home Page</h1>
      <MainContainer>
        <LeftContentContainer>
          <SearchContainer>
            <input onChange={handleChange} placeholder="Search Pokemon" />
          </SearchContainer>
          {pokemons ? (
            filtered.map((pokemon) => {
              return (
                <PokemonCard
                  pokemon={pokemon}
                  key={pokemon.name}
                  setPokeProfile={setPokeProfile}
                />
              );
            })
          ) : (
            <p>Loading...</p>
          )}
          ;
        </LeftContentContainer>
        <RightContentContainer>
          <PokemonProfile pokeProfile={pokeProfile} />
        </RightContentContainer>
      </MainContainer>
    </>
  );
};

export default Home;
