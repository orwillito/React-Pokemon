import React, { useMemo } from "react";
import { usePokemonParty } from "../context/PokemonContext";
import styled from "styled-components";
import { mediaQueries } from "../utils/mediaQueries";
import { TypeClassStyle } from "./PokemonCard";

const PokemonProfileStyle = styled.div`
  width: 50vw;
  min-height: 50vh;
  height: 810px;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  stroke: #000000;
  padding-top: 3rem;
  position: sticky;
  top: 0;
  background: #ffffff;
  padding: 2rem;
  margin-top: 1rem;

  ${mediaQueries("laptop")`
    margin: 4rem;
  `}

  ${mediaQueries("mobile")`
    height: auto;
    width: unset;
    width: 80%;
    margin: 0;
    margin-top: 2rem;
    padding: 1rem;
  `}
`;

const ProfileStandby = styled.div`
  height: 10rem;
  width: 10rem;
  border-radius: 100px;
  margin: auto;
  background-color: red;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: 900;
  font-size: 10pt;
  line-height: 2;
`;

const PokeProfileStyle = styled.div`
  border-radius: 100px;
  height: auto;
`;

const PokePicture = styled.div`
  border-style: solid;
  border-color: black;
  border-radius: 10px;
  margin: auto;
  width: 17rem;
  height: 17rem;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueries("mobile")`
    height: 90px;
    width: 90px;
    font-size: 1rem;
    font-weight 300;
`}
`;

const PokeAvatar = styled.img`
  height: 15rem;
  width: 15rem;

  ${mediaQueries("mobile")`
    height: 90px;
    width: 90px;
    font-size: 1rem;
    font-weight 300;
  `}
`;

const NameDiv = styled.div`
  width: 100%
  height: auto;
  justify-content: center;
  text-align: center;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

const LeftColumn = styled.div`
  height: auto;
  width: 50%;
`;

const RightColumn = styled.div`
  height: auto;
  width: 50%;
`;

const PokemonStatsContainer = styled.div`
  height: 40px;
  width: auto;
  margin: auto;
  flex-direction: column;
`;

const PokeProfileTerm = styled.h4`
  font-weight: 900;
`;

const PokeProfileValue = styled.h5`
  font-weight: 300;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChooseYouButton = styled.button`
  height: 3rem;
  width: 16rem;
  border-radius: 40px;
  margin-top: 2rem;
  text-align: center;
  color: white;
  font-weight: 900;
  background-color: ${(props) => (props.disabled ? "gray" : "red")};
`;

const PokemonProfile = ({ pokeProfile }) => {
  const { currentPokemon, setCurrentPokemon } = usePokemonParty();

  const partyLabel = useMemo(() => {
    if (
      (pokeProfile !== undefined && currentPokemon !== undefined) ||
      currentPokemon.length > 1
    ) {
      // return party.collections.includes(pokeProfile.name);
      return currentPokemon.collections.some(
        (partyItem) => partyItem.name === pokeProfile.name
      );
    }
  }, [currentPokemon, pokeProfile]);

  const handleClick = () => {
    if (currentPokemon === undefined || currentPokemon.length === 0) {
      // setParty({ collections: [pokeProfile] });
      setCurrentPokemon({ collections: [pokeProfile] });
    } else {
      // setParty((prevState) => ({
      //   collections: [...prevState.collections, pokeProfile],
      // }));
      setCurrentPokemon((prevState) => ({
        collections: [...prevState.collections, pokeProfile],
      }));
    }
  };
  console.log("current pokemon", currentPokemon);

  return (
    <PokemonProfileStyle>
      {!pokeProfile ? (
        <ProfileStandby>
          <p>
            Select <br />
            Pokemon Card
          </p>
        </ProfileStandby>
      ) : (
        <>
          <PokeProfileStyle>
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
              {currentPokemon?.collections.length < 6 && (
                <ChooseYouButton
                  key={pokeProfile.name}
                  onClick={handleClick}
                  disabled={partyLabel}
                >
                  {partyLabel ? "Already Chosen" : "I choose you"}
                </ChooseYouButton>
              )}
            </ButtonContainer>
          </PokeProfileStyle>
        </>
      )}
    </PokemonProfileStyle>
  );
};
export default PokemonProfile;
