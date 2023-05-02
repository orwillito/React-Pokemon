import React, { useState, useEffect } from "react";
import { getPokemonIds } from "../utils/fetch";
// import {
//   PokemonCardStyle,
//   Avatar,
//   TypeClassStyle,
// } from "../utils/ComponentsStylesheet";
import CircleLoader from "react-spinners/FadeLoader";
import styled from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";

const PokemonCardStyle = styled.div`
  width: 16rem;
  height: 16rem;
  background: #ffffff;
  box-shadow: 4px 4px 6px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin: 5rem 1.25rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  justify-content: center;
  transition: background-color 0.4s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: lightgrey;
    transform: scale(1.125);
  }

  ${mediaQueries("laptop")`
  height: 12rem;
  width: 10rem;
  `}

  ${mediaQueries("mobile")`
    padding: 1rem 0;
    height: 11rem;
    width: 140px;
    font-size: 14px;
    font-weight 300;
  `}
`;

const Avatar = styled.img`
  height: 13rem;
  width: 13rem;
  margin-top: -6.875rem;
  z-index: 2;

  ${mediaQueries("laptop")`
  height: 10rem;
  width: 10rem;
  `}

  ${mediaQueries("mobile")`
    margin-top: -5rem
    height: 6rem;
    width: 6rem;
  `}
`;

export const TypeClassStyle = styled.div`
  height: 2.2rem;
  width: 6rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  display: flex;
  margin: auto;
  ${(props) => {
    if (props.type === "water") {
      return `background-color: #B7B9D0`;
    } else if (props.type === "bug") {
      return `background-color: #A7B723`;
    } else if (props.type === "Dark") {
      return `background-color: #75574C`;
    } else if (props.type === "dragon") {
      return `background-color: #7037FF`;
    } else if (props.type === "electric") {
      return `background-color: #F9CF30`;
    } else if (props.type === "fairy") {
      return `background-color: #E69EAC`;
    } else if (props.type === "fighting") {
      return `background-color: #C12239`;
    } else if (props.type === "fire") {
      return `background-color: #F57D31`;
    } else if (props.type === "flying") {
      return `background-color: #A891EC`;
    } else if (props.type === "ghost") {
      return `background-color: #70559B`;
    } else if (props.type === "normal") {
      return `background-color: #AAA67F`;
    } else if (props.type === "grass") {
      return `background-color: #74CB48`;
    } else if (props.type === "ground") {
      return `background-color: #DEC16B`;
    } else if (props.type === "ice") {
      return `background-color: #9AD6DF`;
    } else if (props.type === "poison") {
      return `background-color: #A43E9E`;
    } else if (props.type === "psychic") {
      return `background-color: #FB5584`;
    } else if (props.type === "rock") {
      return `background-color: #B69E31`;
    } else if (props.type === "steel") {
      return `background-color: #B7B9D0`;
    }
  }};
`;

const LoadingStyle = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PokemonCardNumber = styled.h3`
  font-size: 1.2rem;

  ${mediaQueries("laptop")`
  font-size: 1rem;
  `}
`;

const PokemonCardName = styled.h2`
  font-size: 1.3rem;
`;

const PokemonCardType = styled.h4`
  font-size: 1rem;
`;

const PokemonCard = ({ pokemon, setPokeProfile }) => {
  const [pokemonInfos, setPokemonInfos] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPokemonIds(pokemon.name)
      .then((data) => {
        setPokemonInfos(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => console.log("error", err));
  }, [pokemon]);

  //console.log('this is the result =>', pokemonInfos);

  const handleClick = () => {
    setPokeProfile(pokemonInfos);
  };

  return (
    <>
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
          <PokemonCardStyle key={pokemon.name} onClick={handleClick}>
            <Avatar
              src={pokemonInfos?.sprites.other.dream_world.front_default}
              alt="PokeImage"
            />

            <PokemonCardNumber>No. {pokemonInfos?.id}</PokemonCardNumber>
            <PokemonCardName>{pokemon.name}</PokemonCardName>

            <TypeClassStyle type={pokemonInfos?.types[0].type.name}>
              <PokemonCardType>
                {pokemonInfos?.types[0].type.name}
              </PokemonCardType>
            </TypeClassStyle>
          </PokemonCardStyle>
        </>
      )}
    </>
  );
};

export default PokemonCard;
