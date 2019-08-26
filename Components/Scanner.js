import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LogoTitle from './LogoTitle';
import { RNCamera } from 'react-native-camera';
// import { withNavigationFocus } from 'react-navigation';

class Scanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            focusedScreen: true
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.addListener('willFocus', () =>
          this.setState({ focusedScreen: true })
        );
        navigation.addListener('willBlur', () =>
          this.setState({ focusedScreen: false })
        );
    }

    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerStyle: {
            backgroundColor:'#ffcd00',
        },
        headerRight: <View/>
    };

        

    barcodeRecognized = ({ barcodes }) => {
        var data;
        barcodes.forEach(barcode => (data = barcode.data));
        if(data === '_D9Ex`R5iKNOlHm07=$acX>11rx<2C'){
            this.props.navigation.push('ServiceScreen');
        }else{
            alert('The QR code was not correct. We request you to try again.');
            this.props.navigation.navigate('HomeScreen');
        }
        
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
                {this.state.focusedScreen? <RNCamera ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.cameraStyle}
                    onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
                </RNCamera> : <View></View>
                }
            </View>
        )
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

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
        width: width/2,
        height: height/2
    }
})

export default Scanner;