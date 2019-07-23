import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

// Screens
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import RegisterScreen from '../Screens/Register';
import SplashScreen from '../Screens/Splash';

// Main Stack
const AppStackNavigation = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: null
    }
  }
);

// Auth Stack
const AuthStackNavigation = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppNavigation = createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplashScreen,
      App: AppStackNavigation,
      Auth: AuthStackNavigation
    },
    {
      initialRouteName: 'Auth'
    }
  )
);

export default AppNavigation;
