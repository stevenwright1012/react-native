import React from 'react';
import {Button, Alert, StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';

export default class Pokebutton extends React.Component{
    render(){
        let path = `./assets/pokesprites/${this.props.number}.png`
        return(
            <View style={styles.container}>
            <TouchableOpacity onPress={() => {Alert.alert(this.props.name)}} title={this.props.name.toUpperCase()} style = {styles.button}>
                <Image source={require(`./assets/pokesprites/1.png`)}/>
                <Text>{this.props.name.toUpperCase()}</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        marginTop: 5,
        marginLeft: 2,
        marginRight: 2,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
    },
    button:{

    }
})