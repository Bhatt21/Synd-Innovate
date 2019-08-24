import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, {Component} from 'react';
import Home from './Home';
import Scanner from './Scanner';
import Services from './Services';

const AppStackNavigator = createStackNavigator({
  HomeScreen: {
      screen: Home
  },
  ScannerScreen: {
    screen: Scanner
  },
  ServiceScreen: {
    screen: Services
  }
    
    
  });
  
  const ScreenContainer = createAppContainer(AppStackNavigator);

  export default ScreenContainer;
