import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

//screens import

import MainScreen from './src/views/MainScreen'
import Logon from './src/views/Logon'
import Login from './src/views/Login'
import UserScreen from './src/views/UserScreen'

const App = createStackNavigator({
    Home: {
      screen: MainScreen,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen:  Login,
        navigationOptions: {
          header: null,
      },
    },
    Logon: {
      screen: Logon,
      navigationOptions: {
        title: 'Crie sua conta',
        headerStyle: {
          backgroundColor: '#005F80',
        },
        headerTintColor: '#fefefe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    },
    UserScreen: {
      screen: UserScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);