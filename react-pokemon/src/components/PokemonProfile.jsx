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
              src={pokeProfile.sprites.other.home.front_default}
              alt="PokeImage"
            />
          </PokePicture>

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
};
export default PokemonProfile;
