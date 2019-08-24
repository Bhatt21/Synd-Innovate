import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LogoTitle from './LogoTitle';
import { RNCamera } from 'react-native-camera';

class Scanner extends Component {
    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerStyle: {
            backgroundColor:'#ffcd00',
        },
        headerRight: <View/>
    };

    barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.warn(barcode.data))
    };
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Book your place in the queue
                </Text>
                <Text style={styles.text}>
                    Scan the QR code to proceed further
                </Text>
                <RNCamera ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.cameraStyle}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
                </RNCamera>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fffae0'
    },
    text:{
        fontSize: 20,
        paddingTop: 20
    },
    cameraStyle:{
        marginTop: 150,
        width:'100%',
        height: '50%'
    }
})

export default Scanner;