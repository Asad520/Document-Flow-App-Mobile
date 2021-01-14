import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import login from "../pages/auth/login";
import home from "../pages/home/home";
const loginStack = createStackNavigator({
  login: login,
});
// Add all screens for Home Stack
const homeStack = createStackNavigator({
  home: home,
});
const MainTab = createBottomTabNavigator({
  Home: {
    screen: homeStack,
  },
});

var SwitNav = createSwitchNavigator({
  login: loginStack,
  app: MainTab,
});

export var AppContainer = createAppContainer(SwitNav);
