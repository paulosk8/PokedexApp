import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
  const { pokemons, loadsPokemons, isNext } = props;
  const loadMore = () => {
    loadsPokemons();
  }
    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                <ActivityIndicator 
                    size="large"
                    style={styles.spinner}
                    color={"#AEAEAE"}
                />
            }
        />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer:{
        paddingHorizontal: 5,
        marginTop: Platform.OS === "ios" ? 30 : 0
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === "ios" ? 90 : 60
    }
})