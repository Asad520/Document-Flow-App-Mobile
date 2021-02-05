import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import welcome from '../pages/welcome/welcome';
import adminLogin from '../pages/admin/adminLogin/adminLogin';
import adminHome from '../pages/admin/adminHome/adminHome';

const adminStack = createStackNavigator({
  welcome,
  adminLogin,
  adminHome,
});
const userStack = createStackNavigator({
  welcome,
});

var SwitNav = createSwitchNavigator({
  adminStack,
  userStack,
});

export var AppContainer = createAppContainer(SwitNav);
