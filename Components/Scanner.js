import React, {Component} from 'react';
import {View, Text} from 'react-native';
import LogoTitle from './LogoTitle';

class Scanner extends Component {
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
                    Scan QR
                </Text>
            </View>
        )
    }
}

export default Scanner;