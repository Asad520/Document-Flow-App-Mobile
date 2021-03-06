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
import userLogin from '../pages/user/userLogin/userLogin';
import userHome from '../pages/user/userHome/userHome';
import faqs from '../pages/user/faqs/faqs';
import requests from '../pages/user/submitRequest/requests';
import newForm from '../pages/user/newForm/newForm';
import customizeForm from '../pages/user/customizeForm/customizeForm';
import checkStatus from '../pages/user/checkStatus/checkStatus';
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
  userLogin,
  userHome,
  requests,
  newForm,
  customizeForm,
  checkStatus,
  faqs,
});

var SwitNav = createSwitchNavigator({
  adminStack,
  userStack,
});

export var AppContainer = createAppContainer(SwitNav);
