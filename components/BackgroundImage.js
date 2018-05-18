import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet
} from 'react-native';

const remote = 'https://i.imgur.com/2gfwG.png'


export default class BackgroundImage extends Component{

    render() {
        const resizeMode = 'center';

        return(
            <Image style={styles.img} source={{uri:remote}} />
        )
    }
}

const styles = StyleSheet.create({
    img:{
        flex:1,
        // resizeMode,
        height:'100%',
        width: '100%',
        position: 'absolute'
    }
})
// AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);