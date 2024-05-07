/* import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { getPokemonsApi } from '../api/pokemon';


export default function Pokedex() {
    useEffect(()=>{
        (async ()=>{
            await loadsPokemons();
        })();
    }, []);

  const loadsPokemons = async () => {
    try {
        const response = await getPokemonsApi();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
  }

    return (
    <SafeAreaView>
        <Text>Pokedex</Text>
    </SafeAreaView>
  )
} */