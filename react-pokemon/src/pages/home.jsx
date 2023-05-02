import React, { useEffect, useState, useMemo } from "react";
import { getPokemons } from "../utils/fetch";
import CircleLoader from "react-spinners/FadeLoader";
import styled from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";

import PokemonProfile from "../components/PokemonProfile";
import PokemonCard from "../components/PokemonCard";
import PartyOfSix from "../components/PartyOfSix";
import Footer from "../components/footer";

export const LoadingStyle = styled.div`
  margin-top: 10rem;
  height: 50rem;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  min-height: 85rem;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;

  ${mediaQueries("laptop")`

  `}

  ${mediaQueries("mobile")`
    padding: 0;
    margin: 0;
  `}
`;

export const TopContainer = styled.div`
  height: 250px;
  width: 60%;
  display: flex;
  margin: 1rem 3rem 1rem 1rem;
  justify-content: center;
  overflow: hidden;

  ${mediaQueries("mobile")`
    height: auto;
    margin: 0;
    width: 100%;
    font-size: 1rem;
    font-weight 300;
  `}
`;

export const SearchContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${mediaQueries("laptop")`
   font-size: 1.5rem;
   font-weight: 400;
  `}

  ${mediaQueries("mobile")`
    font-size: 1rem;
    font-weight 300;
  `}
`;

export const SearchPokemonStyle = styled.input`
  height: 3.125rem;
  width: 50rem;
  border-style: solid;
  margin: 1rem auto 1rem;
  border-radius: 1.5rem;
  padding-left: 2rem;

  ${mediaQueries("mobile")`
    width: 100%;
    font-size: 1rem;
    font-weight 300;
  `}
`;

export const LeftContentContainer = styled.div`
  width: 60%;
  margin: 2rem;

  ${mediaQueries("laptop")`
  justify-content: center;
  `}

  ${mediaQueries("mobile")`
    order: 2;
    width: 100%;
    font-size: 1rem;
    font-weight 300;
  `}
`;

export const LeftSubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries("mobile")`
  
  font-size: 1rem;
  font-weight 300;
`}
`;

export const PokemonCardContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  height: 900px;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;

  ${mediaQueries("laptop")`
  `}

  ${mediaQueries("mobile")`
  height: auto;
  width: 100%;
  `}
`;

export const RightContentContainerStyle = styled.div`
  width: 30%;
  margin-left: 0;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin-top: -18rem;

  ${mediaQueries("mobile")`
    margin: 0;
    padding: 0;
    order: 1;
    width: 100%;
    font-size: 1rem;
    font-weight 300;
`}
`;

export const PokemonPartyContainer = styled.div`
  display: flex;
  margin-left: 5rem;
  width: auto;
  justify-content: center;

  ${mediaQueries("laptop")`
   
   max-width: 100%;
   justify-content: center;
   
  `}

  ${mediaQueries("mobile")`
    width: 100%;
    margin: 0;
    font-size: 1rem;
    font-weight 300;
  `}
`;

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
            <TopContainer>
              <PokemonPartyContainer>
                <PartyOfSix pokeProfile={pokeProfile} party={party} />
              </PokemonPartyContainer>
            </TopContainer>
            <LeftContentContainer>
              <SearchContainerStyle>
                <SearchPokemonStyle
                  onChange={handleChange}
                  placeholder="Search Pokemon"
                />
              </SearchContainerStyle>
              <LeftSubContainer>
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
              </LeftSubContainer>
            </LeftContentContainer>
            <RightContentContainerStyle>
              <PokemonProfile
                pokeProfile={pokeProfile}
                party={party}
                setParty={setParty}
              />
            </RightContentContainerStyle>
          </>
        )}
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;
