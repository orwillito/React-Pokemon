import React, { useEffect, useState, useMemo } from "react";
import { getPokemons } from "../utils/fetch";

import {
  MainContainer,
  LeftContentContainer,
  RightContentContainer,
  SearchContainer,
  LoadingStyle,
  PokemonCardContainer,
  SearchPokemonStyle,
  PokemonPartyContainer,
} from "../utils/ComponentsStylesheet";
import PokemonProfile from "../components/PokemonProfile";
import PokemonCard from "../components/PokemonCard";
import PartyOfSix from "../components/PokemonParty";

const Home = () => {
  const [pokemons, setPokemons] = useState();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokeProfile, setPokeProfile] = useState();
  const [party, setParty] = useState({ collections: [] });

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
      <MainContainer>
        <LeftContentContainer>
          <PokemonPartyContainer>
            <PartyOfSix pokeProfile={pokeProfile} party={party} />
          </PokemonPartyContainer>
          <SearchContainer>
            <SearchPokemonStyle
              onChange={handleChange}
              placeholder="Search Pokemon"
            />
          </SearchContainer>
          <PokemonCardContainer>
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
              <LoadingStyle>Loading...</LoadingStyle>
            )}
          </PokemonCardContainer>
        </LeftContentContainer>
        <RightContentContainer>
          <PokemonProfile
            pokeProfile={pokeProfile}
            party={party}
            setParty={setParty}
          />
        </RightContentContainer>
      </MainContainer>
    </>
  );
};

export default Home;
