import React, { useState, useEffect } from "react";
import { getPokemonIds } from "../utils/fetch";
import styled from "styled-components"; 

const PokemonCard = ({pokemon}) => {
  const [pokemonInfos, setPokemonInfos] = useState();
  useEffect(() => {
    getPokemonIds(pokemon.name)
      .then((data) => setPokemonInfos(data))
      .catch((err) => console.log('error', err));
  }, []);

  //console.log('this is the result =>', pokemonInfos);

  return (
    <>
      <div>
      <p><img src={pokemonInfos?.sprites.other.dream_world.front_default} alt="PokeImage"/></p>
        <h3>Pokemon Info:</h3>
        <p>ID: {pokemonInfos?.id}</p>
        <p>Name: {pokemonInfos?.name}</p>
        <p>Weight: {pokemonInfos?.weight}</p>
        <p>Attack: {pokemonInfos?.stats[1].base_stat}</p>
        <p>Defense: {pokemonInfos?.stats[2].base_stat}</p>
        <p>Type: {pokemonInfos?.types[0].type.name}</p>
      </div>
    </>
  )
}

export default PokemonCard;