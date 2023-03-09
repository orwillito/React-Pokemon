import React, { useEffect, useState, useContext } from 'react';
import PokemonCard from '../components/pokemon-card.component';
import { getPokemons } from '../utils/fetch';
import { 
  MainContainer, 
  LeftContentContainer, 
  RightContentContainer, 
  SearchContainer, 
   } from "../components/pokemon-card.styled";
import PokemonProfile from '../components/pokemon-profile.component';



const Home = () => {
  const [pokemons, setPokemons] = useState();
  
  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);
  
  //console.log('result => ', pokemons);

  return (
    <>
    
      <h1>Home Page</h1>
      <MainContainer>
        <LeftContentContainer>
          <SearchContainer>
          
          </SearchContainer>
          {pokemons?.map((pokemon) => {
            console.log(pokemon)
            return (
            <PokemonCard pokemon={pokemon} key={pokemon.name} />
              
          )})};
        </LeftContentContainer>
        <RightContentContainer>
           <PokemonProfile />
        </RightContentContainer>
      </MainContainer>
      </>
  );
};

export default Home;