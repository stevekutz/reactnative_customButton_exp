import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from './comp/CustomButton';

export default function App() {
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
