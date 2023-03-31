import styled from "styled-components";

const PokePartyBox = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 60rem;
  justify-content: space-around;
  gap: 0.2rem;

  margin-top: 3rem;
  justify-content: start;
`;

const PokeParty = styled.div`
  height: 10.7rem;
  width: 9.5rem;
  background-color: lightgrey;
`;

const ChosenPokemon = styled.img`
  padding: 5px;
  height: 10rem;
  width: 8rem;
  object-fit: contain;
  background-color: rgba(0, 0, 0, 0.1);
`;

const DeletePoke = styled.div`
  width: auto;
  height: auto;
  position: relative;
  right: 1rem;
  cursor: pointer;
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

const PartyOfSix = ({ party, setParty }) => {
  const pokemonParty = party?.collections;
  console.log("pokemon party =>", pokemonParty);
  const emptyPokemonParty = 6 - party?.collections.length;

  const HandleClick = (name) => {
    const update = pokemonParty.filter((pokemon) => pokemon.name !== name);
    setParty({ collections: [...update] });
  };

  const HandleClickBtn = () => {
    setParty({ collections: [] });
  };

  return (
    <>
      <PokePartyBox>
        {pokemonParty.length > 0 ? (
          pokemonParty
            ?.map((partyItem) => (
              <>
                <ChosenPokemon
                  key={partyItem.name}
                  src={partyItem.sprites.other.dream_world.front_default}
                  alt="Pokemon Image"
                ></ChosenPokemon>

                <DeletePoke onClick={() => HandleClick(partyItem.name)}>
                  x
                </DeletePoke>
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
