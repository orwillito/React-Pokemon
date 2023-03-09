import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokemonCard from '../components/pokemon-card.component';
import { getPokemons, getSearchPokemon } from '../utils/fetch';
import { MainContainer, LeftContentContainer, SearchContainer, RightContentContainer } from '../components/pokemon-card.styled';

const Home = () => {
  const [pokemons, setPokemons] = useState();
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonProfile, setPokemonProfile] = useState();
  



  // useEffect(() => {
  //   if(searchPokemon && searchPokemon !== "") {
  //     getSearchPokemon(searchPokemon).then((data) => {
  //       // setSearchPokemon(data);
  //       //console.log('result', data);
  //     });
  //   }
   
  // }, [searchPokemon]);
  

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);
  
  //console.log('result => ', pokemons);
  
  //console.log('results', filterPokemon);
  

  const handleChange = (e) => {
    const textInput = e.target.value.toLowerCase();

    //const filterPokemon = pokemons.filter(pokemon => pokemon?.name);
    pokemons?.map((pokemon) => {
      const name = pokemon?.name
      if (name.toLowerCase().includes(textInput.toLowerCase())) {
        console.log('this is the name', name);
        setSearchPokemon(name);
      } else {

      }
    });
    console.log('filter', textInput);
    setPokemonProfile(textInput)
    //compare text input to allPokemon 
    //hint: filter(), find(), contains()
    
  }
  
  console.log('search result', searchPokemon); 

  return (
    <>
      <h1>Home Page</h1>
      <MainContainer>
        <LeftContentContainer>
          <SearchContainer>
            <input onChange={handleChange} placeholder='Search Pokemon' value={pokemonProfile}/>
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