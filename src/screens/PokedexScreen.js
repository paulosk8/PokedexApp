import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  console.log("pokmons->", pokemons);

    useEffect(()=>{
        (async ()=>{
            await loadsPokemons();
        })();
    }, []);

  const loadsPokemons = async () => {
    try {
        const response = await getPokemonsApi(nextUrl);
        console.log(response.count);
        setNextUrl(response.next);
        /* console.log(response); */
        const pokemonsArray = [];
        for await (const pokemon of response.results) {
          const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image: pokemonDetails.sprites.other['official-artwork'].front_default,
          })
        }
        setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
        console.error(error);
    }
  }

    return (
    <SafeAreaView>
        <PokemonList 
          pokemons={pokemons} 
          loadsPokemons={loadsPokemons} 
          isNext={nextUrl} 
        />
    </SafeAreaView>
  )
}