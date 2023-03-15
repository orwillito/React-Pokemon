import React, { useState, useEffect } from "react";
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

const PokemonProfile = ({ pokeProfile }) => {
  console.log("data", pokeProfile);
  const [party, setParty] = useState();

  useEffect(() => {
    getPokemonIds;
  });

  const handleClick = () => {
    setParty(pokeProfile);
  };

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
            <ChooseYouButton key={pokemon.name} onClick={handleClick}>
              I choose you
            </ChooseYouButton>
          </ButtonContainer>
        </>
      )}
    </PokemonProfileStyle>
  );
};
export default PokemonProfile;
