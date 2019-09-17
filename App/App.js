import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

//screens import

import MainScreen from './src/views/MainScreen';
import Logon from './src/views/Logon'
import Login from './src/views/Login'
const App = createStackNavigator({ 
    Home: {
      screen: MainScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
        navigationOptions: {
          header: null,
      },
    },
    Logon: {
      screen: Logon,
        navigationOptions: {
          header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);