import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = (props) => {
    <View style = {styles.customButtonContainer}>
        <TouchableOpacity activeOpacity = {0.75} onPress = {props.onPress}>
        <View style = {{...styles.customButton, ...props.style}}>
            <Text style = {{...styles.customButtonText}}> {props.children}</Text>
        </View>
        </TouchableOpacity>   
    </View>
}

const styles = StyleSheet.compose({
    customButtonContainer: {
    
    
    },
    customButton: {
    
    
    }, 
    customButtonText: {
    
    
    }




});

export default CustomButton;