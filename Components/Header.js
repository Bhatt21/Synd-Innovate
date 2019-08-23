import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            homePage : true
        };
    }

    // componentDidMount(){
    //     this.setState({
    //         homePage: true
    //     })
    // }


    //{this.props.homePage ? header 1 : header 2}
    
    render(){
        return(
            <View style={styles.ImageContainer}>
                {this.state.homePage ?<Image style={styles.logo} source={require('../Assets/Images/Syndicate_Bank.svg.png')}></Image>   
                    : 
                    <Text>Header 2</Text>
                }
            </View>
        )
    }
}

var {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',  
    },
    logo: {
        resizeMode: 'contain',
        width: '50%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    ImageContainer:{
        width: '100%',
        height: height/8,
        paddingTop: 0,
        backgroundColor : '#ffcd00'
    }
})

export default Header;
