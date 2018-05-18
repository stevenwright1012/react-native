import React from 'react';
import {Button, Alert, StyleSheet, Image} from 'react-native';

export default class Pokebutton extends React.Component{
    render(){
        return(
            <Button onPress={() => {Alert.alert(this.props.name)}} title={this.props.name.toUpperCase()}>
                <Image source={{}}/>
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    button:{

    }
})