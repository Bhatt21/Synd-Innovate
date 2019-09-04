import React,  {Component} from 'react';
import {Text, StyleSheet, View, Image, Dimensions, Button} from 'react-native';
import LogoTitle from './LogoTitle';
import { ScrollView } from 'react-native-gesture-handler';
GLOBAL = require('./Global');

var userId = 977;

class Ticket extends Component{
    constructor(props){
        super(props);
        this.state = {
            agentName: '',
            counterNo: '',
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
        

        var dataCollection = {
            id: userId
        }

        fetch("http://0.0.0.0:8081/api/service/delete",{
            method: 'POST',
            body: JSON.stringify(dataCollection),
            headers: new Headers({ 
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(this.props.navigation.navigate('HomeScreen'))
        .catch((error) => {
            alert(error)
        })
    }

    componentDidMount(){
        var dataCollection = {
            service_type: this.props.navigation.getParam('service'),
            id: userId
        }

        fetch("http://0.0.0.0:8081/api/service",{
            method: 'POST',
            body: JSON.stringify(dataCollection),
            headers: new Headers({ 
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(response => this.setState({
            agentName: response.agentName,
            counterNo: response.counterNo,
            ticketId: response.ticketId,
            reportingTime: response.reportingTime,
            service: response.service
        }));
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
                        <Text>{this.state.agentName}</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Counter No:</Text>
                        <Text>{this.state.counterNo}</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Service:</Text>
                        <Text>{this.state.service}</Text>
                    </View>

                    <View style={styles.inline}>
                        <Text style={styles.title}>Ticket Id:</Text>
                        <Text>{this.state.ticketId}</Text>
                    </View>
                    <View style={styles.inline}>
                        <Text style={styles.title}>Reporting Time:</Text>
                        <Text>{this.state.reportingTime}</Text>
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
        width: width*0.55,
        height: '38%'
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