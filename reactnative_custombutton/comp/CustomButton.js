import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const CustomButton = (props) => {
    
    return (
        <View style = {styles.customButtonContainer}>
            <TouchableOpacity activeOpacity = {0.75} onPress = {props.onPress}>
            <View style = {{...styles.customButton, ...props.style}}>
                <View style = {styles.imageTextContainer}>
                    <Image 
                        source = {props.source}
                        style = {{...styles.buttonImage, ...props.style}}/>
                    <Text style = {{...styles.customButtonText, ...props.style}}>
                        {props.children}
                    </Text>            
                </View>
                
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
        alignItems: 'center',
        justifyContent: 'center',
        // alignItems: 'center',

    }, 
    customButtonText: {
        borderWidth: 1,
        borderColor: 'orange',

        color: 'snow',
        // backgroundColor: 'yellow',
        fontSize: 18,
        textAlign: 'center',
            
        
        margin: 0,
        // fontFamily: 'Raleway-Thin'


    },
    imageTextContainer: {
        borderWidth: 1,
        borderColor: 'green',

        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    buttonImage: {
        height: 18,
        width: 18,
    },




});

export default CustomButton;


// <View style = {styles.buttonImage}>
//     <Image style = {{...styles.buttonImage, ...props.style}}/>

// </View>