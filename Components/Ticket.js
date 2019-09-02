import React,  {Component} from 'react';
import {Text, StyleSheet, View, Image, Dimensions, Button} from 'react-native';
import LogoTitle from './LogoTitle';
import { ScrollView } from 'react-native-gesture-handler';
GLOBAL = require('./Global');

class Ticket extends Component{
    constructor(props){
        super(props);
        this.state = {
            agentName: '',
            counterNumber: '',
            ticketId: '',
            reportingTime: '',
            service: ''
        }
    }

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

    componentDidMount(){
        var dataCollection = {
            service_type: this.props.navigation.getParam('service'),
            id: '312'
        }
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then((responseJson)=>{
        //     this.setState({
        //         agentName: responseJson[0].name
        //     })
        // })
        //

        fetch("http://0.0.0.0:8081/api/service",{
            method: 'POST',
            body: JSON.stringify(dataCollection),
            headers: new Headers({ 
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(response => console.warn(response.ETA));

        // this.setState({
        //     agentName: 'Luttapi Fucking Kumar',
        //     service: dataCollection.service
        // })
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
                        <Text>Luttapi Fucking Kumar</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Counter No:</Text>
                        <Text>T4</Text>
                    </View>
                    {/* <View style={styles.inline}>
                        <Text style={styles.title}>Service:</Text>
                        <Text>{this.state.service}</Text>
                    </View> */}

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
    },
    imageContainer: {
        marginTop: 30,
        width: width*0.5,
        height: height*0.3,
    },
    image:{
        width: '100%',
        height: '100%',
    },
    inline:{
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginBottom: 20,
        flexWrap: 'wrap',
    },
    title: {
        marginRight: 20,
        fontWeight: 'bold',
    }
})
export default Ticket;