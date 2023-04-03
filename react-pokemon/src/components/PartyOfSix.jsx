import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PokeAvatar } from "../utils/ComponentsStylesheet";
import { mediaQueries } from "../utils/mediaQueries";

const PokePartyBox = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 60rem;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 0;
  margin-top: 3rem;
  justify-content: start;

  ${mediaQueries("laptop")`
  flex-wrap: wrap;
  `}
`;

const PokeParty = styled.div`
  padding: 0.5rem;
  height: 10rem;
  width: 8rem;
  background-color: lightgrey;
  border-radius: 10px;
`;

const ChosenPokemon = styled.img`
  padding: 0.5rem;
  height: 10rem;
  width: 8rem;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const PartyOfSix = ({ party }) => {
  // console.log("result", party);
  const pokemonParty = party.collections; // array --> concat
  const emptyPokemonParty = 6 - party.collections.length; // 6-0 = 6
  // 1. partycount --> array --> length (there's an item)
  // 2. render --> pokepartybox component --> chosen pokemon

  // 1. partycount --> array --> length (there's an item)
  // 2. render --> pokepartybox component --> pokeparty

  return (
    <>
      <PokePartyBox>
        {pokemonParty.length > 0 ? (
          pokemonParty
            ?.map((partyItem) => (
              <ChosenPokemon
                src={partyItem.sprites.other.dream_world.front_default}
                alt="Pokemon Image"
              ></ChosenPokemon>
            ))
            .concat([...Array(emptyPokemonParty)].map((party) => <PokeParty />))
        ) : (
          <>
            {[...Array(emptyPokemonParty)].map((party) => (
              <PokeParty />
            ))}
          </>
        )}
      </PokePartyBox>
    </>
  );
};

/*
  if (partyCount === 0) {
    return (
      <PokePartyBox>
        <PokeParty />
        <PokeParty />
        <PokeParty />
        <PokeParty />
        <PokeParty />
        <PokeParty />
      </PokePartyBox>
    );
  } else if (partyCount === 1) {
    return (
      <>
        <PokePartyBox>
          {pokemonParty?.map((partyItem) => (
            <ChosenPokemon
              src={partyItem.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            ></ChosenPokemon>
          ))}
          <PokeParty />
          <PokeParty />
          <PokeParty />
          <PokeParty />
          <PokeParty />
        </PokePartyBox>
      </>
    );
  } else if (partyCount <= 2) {
    return (
      <>
        <PokePartyBox>
          {pokemonParty?.map((partyItem) => (
            <ChosenPokemon
              src={partyItem.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            ></ChosenPokemon>
          ))}
          <PokeParty />
          <PokeParty />
          <PokeParty />
          <PokeParty />
        </PokePartyBox>
      </>
    );
  } else if (partyCount <= 3) {
    return (
      <>
        <PokePartyBox>
          {pokemonParty?.map((partyItem) => (
            <ChosenPokemon
              src={partyItem.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            ></ChosenPokemon>
          ))}
          <PokeParty />
          <PokeParty />
          <PokeParty />
        </PokePartyBox>
      </>
    );
  } else if (partyCount <= 4) {
    return (
      <>
        <PokePartyBox>
          {pokemonParty?.map((partyItem) => (
            <ChosenPokemon
              src={partyItem.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            ></ChosenPokemon>
          ))}
          <PokeParty />
          <PokeParty />
        </PokePartyBox>
      </>
    );
  } else if (partyCount <= 5) {
    return (
      <>
        <PokePartyBox>
          {pokemonParty?.map((partyItem) => (
            <ChosenPokemon
              src={partyItem.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            ></ChosenPokemon>
          ))}
          <PokeParty />
        </PokePartyBox>
      </>
    );
  } else if (partyCount <= 6) {
    return (
      <>
        <PokePartyBox>
          {pokemonParty?.map((partyItem) => (
            <ChosenPokemon
              src={partyItem.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            ></ChosenPokemon>
          ))}
        </PokePartyBox>
      </>
    );
  }
  */

// return (
//   <>
//     <PokePartyBox>
//       <PokeParty />
//       <PokeParty />
//       <PokeParty />
//       <PokeParty />
//       <PokeParty />
//       <PokeParty />

//       {pokemonParty?.map((partyItem) => (
//         <ChosenPokemon
//           src={partyItem.sprites.other.dream_world.front_default}
//           alt="Pokemon Image"
//         ></ChosenPokemon>
//       ))}
//     </PokePartyBox>
//   </>
// );
// };

export default PartyOfSix;
