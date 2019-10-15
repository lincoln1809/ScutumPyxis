import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './MainScreen';
import Logon from './Logon'
import Login from './Login'

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
    },
  }, {
      initialRouteName: 'Home',
  });

  export default createAppContainer(App);