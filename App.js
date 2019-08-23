import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from './Components/Header';
import Home from './Components/Home';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Header></Header>
        <Home></Home>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: '#f6f8fa'
  },
  
})

export default App;