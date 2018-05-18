import React from 'react';
import {Button, Alert, StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';

export default class Pokebutton extends React.Component{
    state = {
        loading: false,
    }

    getPokemon() {
        this.setState({
            loading:true
        })
        return fetch('http://pokeapi.co/api/v2/pokemon/' + this.props.number)
          .then((response) => response.json())
          .then((responseJson) => {
            let pokemon = {
              name: responseJson.name.toUpperCase(),
              types: responseJson.types,
              moves: responseJson.moves,
              weight: responseJson.weight,
              height: responseJson.height,
              stats: responseJson.stats
            }
            this.setState({
                loading: false
            })
            
            Alert.alert(pokemon.name + '\n' + 
            'HP: ' + pokemon.stats[5].base_stat + '\n' +
            'Attack: ' + pokemon.stats[4].base_stat + '\n' + 
            'Defense: ' + pokemon.stats[3].base_stat + '\n' + 
            'Types: ' + pokemon.types.map(item => item.type.name + ' ') + '\n');
          })
          .catch((error) => {
            console.error(error);
          });
       }

    render(){
        let path = `./assets/pokesprites/${this.props.number}.png`
        return(
            <View style={styles.container}>
                {
                    this.state.loading
                    ?
                    <TouchableOpacity style = {styles.button}>
                        <Text>LOADING!</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => this.getPokemon()} style = {styles.button}>
                        <Image source={this.props.sprite}/>
                        <Text>{this.props.name.toUpperCase()}</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        // textAlign: 'center',
        width: 100,
        height: 115,
        marginTop: 5,
        marginLeft: 2,
        marginRight: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{

    }
})