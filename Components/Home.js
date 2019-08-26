import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native'; 
import LogoTitle from './LogoTitle';

class Home extends Component{
    static navigationOptions = {
        headerTitle: <LogoTitle/>,
      };
    render(){
        return(
        <View style={styles.container}>
            
                <Text style={styles.text}>
                    Home
                </Text>
            
            <View style={styles.buttonContainer}>
                <Button title="Generate a queue ticket" onPress={() => this.props.navigation.push('ScannerScreen')}/> 
            </View>
        </View>
        )
    }
}



const styles= StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#fffae0'
    },
    text:{
        fontSize: 30
    },
    buttonContainer:{
        height : '90%',
        justifyContent: 'center'
    },
    

})

export default Home;