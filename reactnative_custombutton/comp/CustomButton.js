import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, YellowBox} from 'react-native';

const CustomButton = (props) => {
    
    return (
        <View style = {styles.customButtonContainer}>
            <TouchableOpacity activeOpacity = {0.75} onPress = {props.onPress}>
            <View style = {{...styles.customButton, ...props.style}}>
                <Text style = {{...styles.customButtonText, ...props.style}}> {props.children}</Text>
            </View>
            </TouchableOpacity>   
        </View>
    )
       
}

const styles = StyleSheet.compose({
    customButtonContainer: {
        borderWidth: 3,
        borderColor: 'blue',

        width: 200,
        margin: 8,
        padding: 4,
        // justifyContent: 'center',
    },
    customButton: {
        borderWidth: 4,
        borderColor: 'deeppink', 
        
        width: 180,
        backgroundColor: 'dimgrey',
        padding: 4,
        marginHorizontal: 3,
        borderRadius: 10,
        
        display: 'flex',
        // justifyContent: 'center',

    }, 
    customButtonText: {
        // borderWidth: 1,
        // borderColor: 'orange',

        color: 'snow',
        // backgroundColor: 'yellow',
        fontSize: 24,
        textAlign: 'center',
        // fontFamily: 'atures700',
    
    }




});

export default CustomButton;