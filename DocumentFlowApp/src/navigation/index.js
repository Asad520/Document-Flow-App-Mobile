import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import welcome from '../pages/welcome/welcome';

const welcomeStack = createStackNavigator(
  {
    welcome,
  },
  {
    headerMode: 'none',
  },
);
// const adminStack = createStackNavigator({
//   login,
// });
// const userStack = createStackNavigator({
//   login,
// });

var SwitNav = createSwitchNavigator({
  welcomeStack,
  // adminStack,
  // userStack,
});

export var AppContainer = createAppContainer(SwitNav);
