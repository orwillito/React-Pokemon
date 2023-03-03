import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PokemonCard from '../components/pokemon-card.component';
import { getPokemons } from '../utils/fetch';


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
      <div className='main-container'>
        <div className='left-content-container'>
          <div className='search-container'>

          </div>
          {pokemons?.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))};
        </div>
        <div className='right-content-container'>
            
        </div>
      </div>
    </>
  );
};

export default Home;