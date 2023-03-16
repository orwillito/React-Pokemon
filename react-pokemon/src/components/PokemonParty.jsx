import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PokePartyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 250px;
  width: 60%;
  gap: 15px;
  margin-top: 50px;
`;

const PokeParty = styled.div`
  height: 200px;
  width: 200px;
  background-color: lightgrey;
  margin: 10px;
`;

const PartyOfSix = ({ party }) => {
  console.log("result", party);
  const pokemonParty = party.collections;

  return (
    <>
      {pokemonParty?.map((partyItem) => {
        console.log("this is party item", partyItem);
      })}
    </>
  );
};

export default PartyOfSix;
