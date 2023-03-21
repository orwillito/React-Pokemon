import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PokeAvatar } from "../utils/ComponentsStylesheet";

const PokePartyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 250px;
  width: 60%;
  gap: 15px;
  margin-top: 50px;
  padding-right: 20px;
`;

const PokeParty = styled.div`
  height: 200px;
  width: 200px;
  background-color: lightgrey;
  margin: 10px;
`;

const ChosenPokemon = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  stroke: 4px;
  border: line;
`;

const PartyOfSix = ({ party }) => {
  console.log("result", party);
  const pokemonParty = party.collections;

  return (
    <>
      {!PartyOfSix ? (
        <PokePartyBox>
          <PokeParty key={partyItem.name} />
          <PokeParty key={partyItem.name} />
          <PokeParty key={partyItem.name} />
          <PokeParty key={partyItem.name} />
          <PokeParty key={partyItem.name} />
          <PokeParty key={partyItem.name} />
        </PokePartyBox>
      ) : (
        <PokePartyBox>
          {pokemonParty?.map((partyItem) => (
            <ChosenPokemon
              src={partyItem.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            ></ChosenPokemon>
            // console.log("this is party item", partyItem);
          ))}
        </PokePartyBox>
      )}
    </>
  );
};

export default PartyOfSix;
