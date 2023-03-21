import React, { useEffect, useState, useMemo } from "react";
import { getPokemons } from "../utils/fetch";
import CircleLoader from "react-spinners/CircleLoader";

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
import PartyOfSix from "../components/PartyOfSix";

const Home = () => {
  const [pokemons, setPokemons] = useState();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokeProfile, setPokeProfile] = useState();
  const [party, setParty] = useState({ collections: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPokemons().then((data) => {
      setPokemons(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
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
        {isLoading ? (
          <LoadingStyle>
            <CircleLoader
              color={"#dc0a2d"}
              loading={isLoading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </LoadingStyle>
        ) : (
          <>
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
                {pokemons &&
                  filtered.map((pokemon) => {
                    return (
                      <PokemonCard
                        pokemon={pokemon}
                        key={pokemon.name}
                        setPokeProfile={setPokeProfile}
                      />
                    );
                  })}
              </PokemonCardContainer>
            </LeftContentContainer>
            <RightContentContainer>
              <PokemonProfile
                pokeProfile={pokeProfile}
                party={party}
                setParty={setParty}
              />
            </RightContentContainer>
          </>
        )}
      </MainContainer>
    </>
  );
};

export default Home;
