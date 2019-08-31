import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, {Component} from 'react';
import Home from './Home';
import Scanner from './Scanner';
import Services from './Services';
import DocumentVerify from './DocumentVerify'; 
import Ticket from './Ticket'; 

const AppStackNavigator = createStackNavigator({
  // HomeScreen: {
  //     screen: Home
  // },
  // ScannerScreen: {
  //   screen: Scanner
  // },
  ServiceScreen: {
    screen: Services
  },
  DocumentVerifyScreen: {
    screen: DocumentVerify,
  },
  TicketScreen: {
    screen: Ticket
  }  
  });
  
  
  const ScreenContainer = createAppContainer(AppStackNavigator);

  export default ScreenContainer;
