import React,  {Component} from 'react';
import {Text, StyleSheet, View, Image, Dimensions, Button} from 'react-native';
import LogoTitle from './LogoTitle';
import { ScrollView } from 'react-native-gesture-handler';
GLOBAL = require('./Global');

class Ticket extends Component{
    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerStyle: {
            backgroundColor:'#ffcd00',
        },
        headerRight: <View/>
    };

    deleteAppointment(){
        GLOBAL.ticketBooked = false;
        this.props.navigation.navigate('HomeScreen');
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Your agent for the day</Text>
                
                <View style={styles.imageContainer}> 
                    <Image style={styles.image} source={{uri:'https://www.researchgate.net/profile/Zhenyun_Peng/publication/260487057/figure/fig7/AS:213452606971910@1427902475213/Automatic-face-caricature-generation-result-of-the-person-in-Figure-3.png'}}/>
                </View>
                <ScrollView style={{marginTop: 50}}>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Name:</Text>
                        <Text>Kanishka Maheshwari</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Counter No:</Text>
                        <Text>T4</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Ticket Id:</Text>
                        <Text>16112027</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Reporting Time:</Text>
                        <Text>12:23 AM</Text>
                    </View>
                    <Button title="Delete My Appointment" style={{width: '100%', marginBottom:20}} onPress={ ()=> {this.deleteAppointment()}}/>
                </ScrollView>
            </View>
        )
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        width: width*0.75,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        // borderRightColor: 'red',
        // borderRightWidth: 2,
        // borderLeftColor: 'red',
        // borderLeftWidth: 2,  
    },
    imageContainer: {
        // flex: 1,
        marginTop: 30,
        width: width*0.5,
        height: height*0.3,
        // borderTopColor: 'red',
        // borderTopWidth: 2,
        // borderRightColor: 'red',
        // borderRightWidth: 2,
        // borderBottomColor: 'red',
        // borderBottomWidth: 2,
        // borderLeftColor: 'red',
        // borderLeftWidth: 2,
    },
    image:{
        width: '100%',
        height: '100%',
    },
    inline:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 20,
        // marginLeft: 20,
        flexWrap: 'wrap',
        // borderBottomColor: 'red',
        // borderBottomWidth: 2,
    },
    title: {
        marginRight: 20,
        fontWeight: 'bold',
    }
})
export default Ticket;