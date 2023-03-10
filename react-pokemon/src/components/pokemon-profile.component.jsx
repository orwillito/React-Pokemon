import React, { useState, useEffect } from "react";
import { PokemonProfileStyle } from "./pokemon-card.styled";
import { getPokemonIds } from "../utils/fetch";

export default function PokemonProfile({ pokeProfile }) {
  console.log("data", pokeProfile);

  return (
    <PokemonProfileStyle>
      {!pokeProfile ? (
        <p>Select Pokemon Card</p>
      ) : (
        <>
          <p>No. {pokeProfile.id}</p>
          <p>{pokeProfile.name}</p>
          <p>Height: {pokeProfile.height}</p>
          <p>Weight: {pokeProfile.weight}</p>
          <p>Type: {pokeProfile.types[0].type.name}</p>
          <p>Base exp: {pokeProfile.base_experience}</p>
        </>
      )}
    </PokemonProfileStyle>
  );
}
