import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { usePokemonParty } from "../context/PokemonContext";
import { PokeAvatar } from "../utils/ComponentsStylesheet";
import { mediaQueries } from "../utils/mediaQueries";


const PokePartyBox = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 60rem;
  justify-content: space-evenly;
  gap: 0.5rem;
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

const DeletePoke = styled.div`
  width: auto;
  height: auto;
  position: relative;
  right: 1rem;
  cursor: pointer;
  z-index: 2;
  font-size: 3rem;
  background-color: grey;
`;

const ButtonClear = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  width: 6rem;
  height: 2rem;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  position: relative;
  top: -2.5rem;
  right: 6rem;
  font-size: 10px;
`;

const PartyOfSix = () => {
  const { currentPokemon, setCurrentPokemon } = usePokemonParty();

  const pokemonParty = currentPokemon?.collections;
  console.log("pokemon party =>", pokemonParty);
  const emptyPokemonParty = 6 - currentPokemon?.collections.length;

  const HandleClick = (name) => {
    const update = pokemonParty.filter((pokemon) => pokemon.name !== name);
    setCurrentPokemon({ collections: [...update] });
  };

  const HandleClickBtn = () => {
    setCurrentPokemon({ collections: [] });
  };

  const [ isHovered, setIsHovered ] = useState(false);
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);
  
  // function useHover() {
  //   const ref = useRef(null);
  //   useEffect(
  //     () => {
  //       const node = ref.current;
  //       if (node) {
  //         node.addEventListener("mouseover", handleMouseOver);
  //         node.addEventListener("mouseout", handleMouseOut);
  //         return () => {
  //           node.removeEventListener("mouseover", handleMouseOver);
  //           node.removeEventListener("mouseout", handleMouseOut);
  //         };
  //       }
  //     },
  //     [ref.current] // Recall only if ref changes
  //   );
  //   return [ref, value];
  // }
  
  return (
    <>
      <PokePartyBox>
        {pokemonParty.length > 0 ? (
          pokemonParty
            ?.map((partyItem) => (
              <>
                <ChosenPokemon
                  key={partyItem.name}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseOut}
                  src={partyItem.sprites.other.dream_world.front_default}
                  alt="Pokemon Image"
                  ></ChosenPokemon>
                  {isHovered && 
                   (<DeletePoke onClick={() => HandleClick(partyItem.name) }>
                "X"
                </DeletePoke>)}
                
              </>
            ))
            .concat([...Array(emptyPokemonParty)].map((party) => <PokeParty />))
        ) : (
          <>
            {[...Array(emptyPokemonParty)].map((party) => (
              <PokeParty />
            ))}
          </>
        )}
        {emptyPokemonParty <= 4 && (
          <ButtonClear onClick={HandleClickBtn}>Clear Party</ButtonClear>
        )}
      </PokePartyBox>
    </>
  );
};

export default PartyOfSix;
