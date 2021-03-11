import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from './comp/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
        <CustomButton>default</CustomButton>
        <CustomButton>GitHub</CustomButton>
        <CustomButton>FaceBook</CustomButton>
        <CustomButton>Twitter</CustomButton>
        <CustomButton>Instagram</CustomButton>
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
  
  
  },
  button_FaceBook: {
    
  
  },
  button_Twitter: {
  
  
  },
  button_Instagram: {
  
  
  }, 

});
