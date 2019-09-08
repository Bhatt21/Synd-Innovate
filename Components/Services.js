import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';
import LogoTitle from './LogoTitle';
import {Icon} from 'react-native-vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


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
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                        Please Select Your Service
                    </Text>
                </View>
                <FlatList data={[
                    {key: 'Advancing Of Loans'},
                    // {key: 'Cheque Payment'},
                    {key: 'Credit Card'},
                    {key: 'Debit Card'},
                    {key: 'Foreign Currency Exchange'},
                    {key: 'Open New Savings Account'},
                    {key: 'Overdraft'},
                ]} renderItem={({item}) => 
                        <TouchableNativeFeedback useForeground={true} onPress={ () => this.LoadService(item.key)}>
                            <View style={styles.listContainer}>
                                <View style={styles.listModifier}>
                                    <Text style={styles.text}>{item.key}</Text>
                                {/* <Text>FontAwesome Icons</Text> */}
                                    <FontAwesome style={{alignSelf: 'flex-end', color: 'grey', paddingBottom:15}} name='angle-right' size={21} />
                                </View>
                            </View>
                        </TouchableNativeFeedback>}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems : 'center',
        marginBottom: 20,
        marginTop: 5  
    },
    listContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems : 'flex-start',
        height:'100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.8, 
        // marginLeft: 5
        // borderRightWidth: 1,
        // borderRightColor: 'red',
        width: '100%',
    },
    listModifier:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderRightWidth: 1,
        width: '98%'
    },
    text:{
        // fontSize: 18,
        paddingTop: 14,
        paddingBottom: 14, 
        paddingLeft: 5,
    }

})

export default Services;