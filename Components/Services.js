import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LogoTitle from './LogoTitle';

class Services extends Component{
    
    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerStyle: {
            backgroundColor:'#ffcd00',
        },
        headerRight: <View/>
    };
    
    render(){
        return(
            <View>
                <Text>
                    Please Select Your Service
                </Text>
            </View>
        )
    }
}

export default Services;