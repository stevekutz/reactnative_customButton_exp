import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import CustomButton from './comp/CustomButton';
import CustomModal from './comp/CustomModal';

import * as Font from 'expo-font';
import addedFonts from './assets/fonts/addedFonts';
import AppLoading from 'expo-app-loading';   // yarn add expo-app-loading

import { useFonts } from 'expo-font'; // yarn add expo-font

import {Entypo, Ionicons, AntDesign, FontAwesome} from '@expo/vector-icons'; 

import {insta} from './assets/images/instagram2.jpg';

// const fetchFonts = async () => {
    
//     await Font.loadAsync(
//     // return Font.loadAsync({   // returns a Promise
//         addedFonts
//     );

// }

const default_handler = () => {
    // alert("default button selected");
    return <CustomModal />
}

export default function App() {

    const [dataLoaded, setDataLoaded] = useState(false);
    let [fetchFonts] = useFonts( addedFonts );

    if (!fetchFonts){
    // if (!dataLoaded) {  // when using fetchFonts & Font.loadAsync()
        return (
            <AppLoading 
            // hide props if useFont hook implemented
                // startAsync = {fetchFonts} 
                // onFinish = {() => setDataLoaded(true)}
                // onError = {() => console.log(err)}
            />
        
        )

        
    }


  return (
    <View style = {styles.mainContainer}>
        <View style={styles.container}>
            <CustomButton 
                style = {styles.button_default} 
                onPress = {() => default_handler}
            ><Ionicons name = 'logo-react' size = {20} color = 'white' />
                      default</CustomButton>
            <CustomButton 
                style = {styles.button_GitHub}
                onPress = {() =>{}}    
            ><AntDesign name = 'github' size = {18} color = 'grey'/> GitHub</CustomButton>
            <CustomButton 
                style = {styles.button_FaceBook}
                onPress = {() =>{}}    
            ><FontAwesome name = 'facebook-square' size = {24} color = 'white' /> FaceBook</CustomButton>
            <CustomButton 
                style = {styles.button_Twitter}
                onPress = {() => {}}
            ><Entypo name = 'twitter' size = {22} color = 'green'/> Twitter</CustomButton>
            <CustomButton 
                style = {styles.button_Instagram}
                source = {require('./assets/images/instagram2.jpg')}
            > Instagram</CustomButton>
        </View>
        <View style = {styles.container}>
            <Image 
                style = {styles.imageIcon}
                source = {require('./assets/images/instagram3.jpg')}   
            />
        
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 4,
    borderColor: 'orange',
    
    flex: 1,

    margin: 40,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  container: {
    borderWidth: 1,
    borderColor: 'pink',


    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    margin: 5,

  },  
  button_default: {
    
  
  },
  button_GitHub: {
    color: '#F2F2F2',
    borderColor: 'seagreen',
    backgroundColor: '#0D1000',
    textAlign: 'left',
    fontFamily: 'atures500',
    fontWeight: '900', // NO EFFECTdoes not work with imported font
    fontSize: 18,
  },
  button_FaceBook: {
    color: 'white',
    borderColor: 'silver',
    borderWidth: 3,
    backgroundColor: 'darkblue',
  
  },
  button_Twitter: {
    color: 'teal',
    borderColor: 'teal',
    borderWidth: 3,
    backgroundColor: 'lightgray',

  },
  button_Instagram: {
    // fontSize: 20,  // causes failed prop type WARNING
    // fontWeight: '500', // works when a System Font used, not when External font used in CustomButton 
    backgroundColor: 'white',
    color: 'orange',
    // justifyContent: 'center',
    // alignItems: 'center',
    lineHeight: 18,

  }, 

  imageIcon: {
    height: 16,
    width: 16,
    // paddingVertical: 4,
    // resizeMode: "cover",
  }

});
