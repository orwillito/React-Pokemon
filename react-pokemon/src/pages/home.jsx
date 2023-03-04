import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokemonCard from '../components/pokemon-card.component';
import { getPokemons } from '../utils/fetch';
import { MainContainer, LeftContentContainer, SearchContainer, RightContentContainer } from '../components/pokemon-card.styled';

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
          {pokemons?.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))};
        </LeftContentContainer>
        <RightContentContainer>
            
        </RightContentContainer>
      </MainContainer>
    </>
  );
};

export default Home;