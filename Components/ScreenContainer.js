import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, {Component} from 'react';
import Home from './Home';
import Scanner from './Scanner';

const AppStackNavigator = createStackNavigator({
   HomeScreen: {
      screen: Home
  },
  ScannerScreen: {
    screen: Scanner
  },
    
    
  });
  
  const ScreenContainer = createAppContainer(AppStackNavigator);

  export default ScreenContainer;
