import React, { useState, useEffect } from "react";
import {
  PokemonProfileStyle,
  PokePicture,
  PokeAvatar,
} from "../utils/ComponentsStylesheet";

const PokemonProfile = ({ pokeProfile }) => {
  console.log("data", pokeProfile);

  return (
    <PokemonProfileStyle>
      {!pokeProfile ? (
        <p>Select Pokemon Card</p>
      ) : (
        <>
          <PokePicture>
            <PokeAvatar
              // eslint-disable-next-line no-undef
              src={pokeProfile.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            />
          </PokePicture>

          <p>No. {pokeProfile.id}</p>
          <h1>{pokeProfile.name}</h1>
          <p>Height: {pokeProfile.height}</p>
          <p>Weight: {pokeProfile.weight}</p>
          <p>Type: {pokeProfile.types[0].type.name}</p>
          <p>Base exp: {pokeProfile.base_experience}</p>
          <p>Speed:{pokeProfile.stats[5].base_stat}</p>
          <p>Attack:{pokeProfile.stats[1].base_stat} </p>
          <p>Defense:{pokeProfile.stats[2].base_stat}</p>
          <p>Hit Points:{pokeProfile.stats[0].base_stat}</p>
          <p>Held Items:</p>
          <p>Special Attack: {pokeProfile.stats[3].base_stat}</p>
          <p>Special Defense: {pokeProfile.stats[4].base_stat}</p>
        </>
      )}
    </PokemonProfileStyle>
  );
};
export default PokemonProfile;
