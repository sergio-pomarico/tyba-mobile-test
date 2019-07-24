import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

// Screens
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/Register';

// Main Stack
const AppStackNavigation = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Wheater App'
    }
  }
);

// Auth Stack
const AuthStackNavigation = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Login'
  }
);

const AppNavigation = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStackNavigation,
      Auth: AuthStackNavigation
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

export default AppNavigation;
