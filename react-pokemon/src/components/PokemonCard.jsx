import React, { useState, useEffect } from "react";
import { getPokemonIds } from "../utils/fetch";
import { PokemonCardStyle, Avatar } from "../utils/ComponentsStylesheet";

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

        <h3>Pokemon Info:</h3>
        <p>ID: {pokemonInfos?.id}</p>
        <p>Name: {pokemon.name}</p>
        <p>Type: {pokemonInfos?.types[0].type.name}</p>
      </PokemonCardStyle>
    </>
  );
};

export default PokemonCard;
