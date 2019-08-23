import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ScreenContainer from './Components/ScreenContainer'

class App extends Component{
  render(){
    return(
      // <View style={styles.container}>
      //   <Header></Header>
      //   <Home></Home>
      // </View>
      <ScreenContainer/>
    )
  }
}

export default App;