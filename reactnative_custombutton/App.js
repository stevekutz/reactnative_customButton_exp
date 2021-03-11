import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from './comp/CustomButton';
import CustomModal from './comp/CustomModal';

import * as Font from 'expo-font';
import addedFonts from './assets/fonts/addedFonts';
import AppLoading from 'expo-app-loading';   // yarn add expo-app-loading

import { useFonts } from 'expo-font'; // yarn add expo-font


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
            <CustomButton style = {styles.button_default} onPress = {() => default_handler}>default</CustomButton>
            <CustomButton style = {styles.button_GitHub}>GitHub</CustomButton>
            <CustomButton style = {styles.button_FaceBook}>FaceBook</CustomButton>
            <CustomButton style = {styles.button_Twitter}>Twitter</CustomButton>
            <CustomButton style = {styles.button_Instagram}>Instagram</CustomButton>
        </View>
        <View style = {styles.container}>
            
        
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
    fontFamily: 'atures100',
    fontWeight: '900', // does not work with imported font
  },
  button_FaceBook: {
    color: 'white',
    borderColor: 'silver',
    backgroundColor: 'darkblue',
  
  },
  button_Twitter: {
    color: 'teal',
    borderColor: 'teal',
    backgroundColor: 'lightgray',

  },
  button_Instagram: {
    fontSize: 18,
    fontWeight: '900', // works when a System Font used, not when External font used in CustomButton 
  }, 

});
