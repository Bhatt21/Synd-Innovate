import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native'; 

class LogoTitle extends React.Component {
  render() {
    return (
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../Assets/Images/Syndicate_Bank.svg.png')}></Image>
      </View>     
    );
  }
}

const styles= StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  header:{
    backgroundColor:'#ffcd00',
    width:'100%'
  }
});

export default LogoTitle;