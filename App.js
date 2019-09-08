import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import ScreenContainer from './Components/ScreenContainer'

class App extends Component{
  render(){
    console.disableYellowBox = true;
    return(
      <ScreenContainer/>
    )
  }
}

export default App;