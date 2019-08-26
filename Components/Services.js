import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import LogoTitle from './LogoTitle';


class Services extends Component{
    
    static navigationOptions = {
        headerTitle: <LogoTitle/>,
        headerStyle: {
            backgroundColor:'#ffcd00',
        },
        headerRight: <View/>
    };
    
    LoadService = (service) => {
        this.props.navigation.push('DocumentVerifyScreen', {
            service: service
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={{fontSize: 20}}>
                        Please Select Your Service
                    </Text>
                </View>
                <FlatList data={[
                    {key: 'Advancing Of Loans'},
                    {key: 'Cheque Payment'},
                    {key: 'Foreign Currency Exchange'},
                    {key: 'Open New Account'},
                    {key: 'Remittance of Funds'},
                ]} renderItem={({item}) => 
                        <TouchableWithoutFeedback onPress={ () => this.LoadService(item.key)}>
                            <View style={styles.listContainer}>
                                <Text style={styles.text}>{item.key}</Text>
                            </View>
                        </TouchableWithoutFeedback>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems : 'center',
        marginBottom: 10,
        marginTop: 5  
    },
    listContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems : 'flex-start',
        height:'100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1, 
    },
    text:{
        fontSize: 18,
        paddingTop: 25, 
        paddingLeft: 5,
        
    }

})

export default Services;