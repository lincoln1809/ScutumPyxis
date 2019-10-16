import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

//screens import

import MainScreen from './src/views/MainScreen'
import Logon from './src/views/Logon'
import Login from './src/views/Login'
import UserScreen from './src/views/UserScreen'
import UserScreen1 from './src/views/UserScreen1'
import SensorRoutes from './src/views/SensorRoutes'
import Lilac from './src/views/lilacRoute'
import Green from './src/views/greenRoute'
import Red from './src/views/redRoute'
import Yellow from './src/views/yellowRoute'
import Orange from './src/views/orangeRoute'

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
    UserScreen1: {
      screen: UserScreen1,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    SensorRoutes: {
      screen: SensorRoutes,
      navigationOptions: {
        title: 'Sensoreamento',
        headerStyle: {
          backgroundColor: '#005F80',
        },
        headerTintColor: '#fefefe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    },
    lilas: {
      screen: Lilac,
      navigationOptions: {
        title: 'Rota Lilás',
        headerStyle: {
          backgroundColor: '#005F80',
        },
        headerTintColor: '#fefefe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    },
    laranja: {
      screen: Orange,
      navigationOptions: {
        title: 'Rota Laranja',
        headerStyle: {
          backgroundColor: '#005F80',
        },
        headerTintColor: '#fefefe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    },
    verde: {
      screen: Green,
      navigationOptions: {
        title: 'Rota Verde',
        headerStyle: {
          backgroundColor: '#005F80',
        },
        headerTintColor: '#fefefe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    },
    amarela: {
      screen: Yellow,
      navigationOptions: {
        title: 'Rota Amarela',
        headerStyle: {
          backgroundColor: '#005F80',
        },
        headerTintColor: '#fefefe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    },
    vermelha: {
      screen: Red,
      navigationOptions: {
        title: 'Rota Vermelha',
        headerStyle: {
          backgroundColor: '#005F80',
        },
        headerTintColor: '#fefefe',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
    },
  },
  {
    initialRouteName: 'Home',
  }
);
export default createAppContainer(App);