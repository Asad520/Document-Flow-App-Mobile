import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import welcome from '../pages/welcome/welcome';
import adminLogin from '../pages/admin/adminLogin/adminLogin';
import adminHome from '../pages/admin/adminHome/adminHome';
import addUser from '../pages/admin/addUser/addUser';
import deleteUser from '../pages/admin/deleteUser/deleteUser';
import respondRequests from '../pages/admin/respondRequests/respondRequests';
import addForm from '../pages/admin/addForm/addForm';
import deleteForm from '../pages/admin/deleteForm/deleteForm';

const adminStack = createStackNavigator({
  welcome,
  adminLogin,
  adminHome,
  addUser,
  deleteUser,
  respondRequests,
  addForm,
  deleteForm,
});
const userStack = createStackNavigator({
  welcome,
});

var SwitNav = createSwitchNavigator({
  adminStack,
  userStack,
});

export var AppContainer = createAppContainer(SwitNav);
