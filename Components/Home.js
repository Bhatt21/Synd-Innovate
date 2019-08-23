import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native'; 

class Home extends Component{
    render(){
        return(
        <View style={styles.container}>
            
                <Text style={styles.text}>
                    Home
                </Text>
            
            <View style={styles.buttonContainer}>
                <Button title="Generate a queue ticket"/> 
            </View>
        </View>
        )
    }
}

/* To load header 2 , perform an onClick and when clicked 
    set props homePge = false like <Header homePage = {false}>
    and default state will always be true
*/

const styles= StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%'
    },
    text:{
        fontSize: 30
    },
    buttonContainer:{
        height : '70%',
        justifyContent: 'center'
    }

})

export default Home;