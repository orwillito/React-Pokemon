import axios from "axios";

export const getPokemons = () => {
  return axios
  .get('https://pokeapi.co/api/v2/pokemon')
  .then ((res) => res.data.results)
  .catch((err) => console.log('error =>', err));
};

export const getPokemonIds = (id) => {
  return axios
  .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((res) => res.data)
  .catch((err) => console.log('error =>', err));
};