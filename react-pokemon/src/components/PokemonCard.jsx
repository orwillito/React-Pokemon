import React, { useState, useEffect } from "react";
import { getPokemonIds } from "../utils/fetch";
import {
  PokemonCardStyle,
  Avatar,
  TypeClassStyle,
} from "../utils/ComponentsStylesheet";

const PokemonCard = ({ pokemon, setPokeProfile }) => {
  const [pokemonInfos, setPokemonInfos] = useState();

  useEffect(() => {
    getPokemonIds(pokemon.name)
      .then((data) => setPokemonInfos(data))
      .catch((err) => console.log("error", err));
  }, [pokemon]);

  //console.log('this is the result =>', pokemonInfos);

  const handleClick = () => {
    setPokeProfile(pokemonInfos);
  };

  return (
    <>
      <PokemonCardStyle key={pokemon.name} onClick={handleClick}>
        <Avatar
          src={pokemonInfos?.sprites.other.dream_world.front_default}
          alt="PokeImage"
        />

        <h3>No. {pokemonInfos?.id}</h3>
        <h2>{pokemon.name}</h2>

        <TypeClassStyle type={pokemonInfos?.types[0].type.name}>
          <h4>{pokemonInfos?.types[0].type.name}</h4>
        </TypeClassStyle>
      </PokemonCardStyle>
    </>
  );
};

export default PokemonCard;
