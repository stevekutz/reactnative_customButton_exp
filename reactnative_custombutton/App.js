import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from './comp/CustomButton';
import * as Font from 'expo-font';
// import addedFonts from './assets/fonts/addedFonts';
import AppLoading from 'expo-app-loading';   // yarn add expo-app-loading

import { useFonts } from 'expo-font'; // yarn add expo-font

const addedFonts = {
    'atures100' : require('./assets/fonts/Atures-100_PERSONAL_USE.ttf'),
    'atures300' : require('./assets/fonts/Atures-300_PERSONAL_USE.ttf'),
    'atures500' : require('./assets/fonts/Atures-500_PERSONAL_USE.ttf'),
    'atures700' : require('./assets/fonts/Atures-700_PERSONAL_USE.ttf'),
    'atures900' : require('./assets/fonts/Atures-900_PERSONAL_USE.ttf'),  // bolder
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'nasalization-rg' : require('./assets/fonts/nasalization-rg.ttf'),
    'Raleway-Bold' : require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-ExtraBold' : require('./assets/fonts/Raleway-ExtraBold.ttf'),
    'Raleway-ExtraLight' : require('./assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-Heavy' : require('./assets/fonts/Raleway-Heavy.ttf'),
    'Raleway-Light' : require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-Medium' : require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular' : require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-SemiBold' : require('./assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-Thin' : require('./assets/fonts/Raleway-Thin.ttf'),

}

const fetchFonts = async () => {
    
    await Font.loadAsync(
    // return Font.loadAsync({   // returns a Promise
        addedFonts
    );

}


export default function App() {

    const [dataLoaded, setDataLoaded] = useState(false);
    // let [fetchFonts] = useFonts( addedFonts );

    if (!dataLoaded) {
        return (
            <AppLoading 
                startAsync = {fetchFonts} 
                onFinish = {() => setDataLoaded(true)}
                onError = {() => console.log('ERROR loading fonts')}
            />
        
        )
        
    }


  return (
    <View style={styles.container}>
        <CustomButton style = {styles.button_default}>default</CustomButton>
        <CustomButton style = {styles.button_GitHub}>GitHub</CustomButton>
        <CustomButton style = {styles.button_FaceBook}>FaceBook</CustomButton>
        <CustomButton style = {styles.button_Twitter}>Twitter</CustomButton>
        <CustomButton style = {styles.button_Instagram}>Instagram</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_default: {
  
  
  },
  
  
  button_GitHub: {
    color: '#F2F2F2',
    borderColor: 'seagreen',
    backgroundColor: '#0D1000',
    textAlign: 'left',
    // fontFamily: 'Raleway-Bold',
    // fontFamily: 'atures700'
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
    fontWeight: '900',
  }, 

});
