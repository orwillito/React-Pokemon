import React, { useState, useEffect, useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import {
  PokemonProfileStyle,
  PokePicture,
  PokeAvatar,
  ChooseYouButton,
  LeftColumn,
  RightColumn,
  PokeProfileTerm,
  PokeProfileValue,
  PokemonStatsContainer,
  MainDiv,
  NameDiv,
  TypeClassStyle,
  ButtonContainer,
  ProfileStandby,
} from "../utils/ComponentsStylesheet";

const PokemonProfile = ({ pokeProfile, party, setParty }) => {
  const partyLabel = useMemo(() => {
    if (
      (pokeProfile !== undefined && party !== undefined) ||
      party.length > 1
    ) {
      // return party.collections.includes(pokeProfile.name);
      return party.collections.some(
        (partyItem) => partyItem.name === pokeProfile.name
      );
    }
  }, [party, pokeProfile]);

  const handleClick = () => {
    if (party === undefined || party.length === 0) {
      setParty({ collections: [pokeProfile] });
    } else {
      setParty((prevState) => ({
        collections: [...prevState.collections, pokeProfile],
      }));
    }
  };
  console.log("party result", party.collections.length);

  return (
    <PokemonProfileStyle>
      {!pokeProfile ? (
        <ProfileStandby>Select Pokemon Card</ProfileStandby>
      ) : (
        <>
          <PokePicture>
            <PokeAvatar
              // eslint-disable-next-line no-undef
              src={pokeProfile.sprites.other.dream_world.front_default}
              alt="Pokemon Image"
            />
          </PokePicture>
          <NameDiv>
            <h4>No. {pokeProfile.id} </h4>
            <h1>{pokeProfile.name}</h1>
          </NameDiv>
          <TypeClassStyle type={pokeProfile.types[0].type.name}>
            <h4>{pokeProfile.types[0].type.name}</h4>
          </TypeClassStyle>

          <MainDiv>
            <LeftColumn>
              <PokemonStatsContainer>
                <PokeProfileTerm>Base exp.</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.base_experience}
                </PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>Held Item</PokeProfileTerm>
                <PokeProfileValue></PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>Attack</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.stats[1].base_stat}
                </PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>Defense</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.stats[2].base_stat}
                </PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>Speed</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.stats[5].base_stat}
                </PokeProfileValue>
              </PokemonStatsContainer>
            </LeftColumn>
            <RightColumn>
              <PokemonStatsContainer>
                <PokeProfileTerm>Height</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.base_experience}
                </PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>Hit Points</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.stats[0].base_stat}
                </PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>Special Attack</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.stats[3].base_stat}
                </PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>Special Defense</PokeProfileTerm>
                <PokeProfileValue>
                  {pokeProfile.stats[4].base_stat}
                </PokeProfileValue>
              </PokemonStatsContainer>
              <PokemonStatsContainer>
                <PokeProfileTerm>weight</PokeProfileTerm>
                <PokeProfileValue>{pokeProfile.weight}</PokeProfileValue>
              </PokemonStatsContainer>
            </RightColumn>
          </MainDiv>
          <ButtonContainer>
            {party?.collections.length < 6 && (
              <ChooseYouButton
                key={pokeProfile.name}
                onClick={handleClick}
                disabled={partyLabel}
              >
                {partyLabel ? "Already Chosen" : "I choose you"}
              </ChooseYouButton>
            )}
          </ButtonContainer>
        </>
      )}
    </PokemonProfileStyle>
  );
};
export default PokemonProfile;
