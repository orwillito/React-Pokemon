import { createContext, useState, useContext } from "react";

export const PokemonContext = createContext({
  currentPokemon: null,
  setCurrentPokemon: () => null,
});

export const PokemonProvider = ({ children }) => {
  const [currentPokemon, setCurrentPokemon] = useState({ collections: [] });
  const value = { currentPokemon, setCurrentPokemon };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemonParty = () => {
  const { currentPokemon, setCurrentPokemon } = useContext(PokemonContext);
  return { currentPokemon, setCurrentPokemon };
};
