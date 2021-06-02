import * as util from '../../../utilities';
import axios from 'axios';
import * as TYPES from '../../types';

const logout = () => {
  return {
    type: TYPES.LOGOUT,
    payload: null,
  };
};

export const login = (curUser) => {
  return async (dispatch) => {
    let response;
    try {
      response = await axios.get('clients');
      console.log('res:', response.data);
      console.log(`curUser`, curUser);
      const user = checkUser(response.data, curUser);
      if (user) {
        dispatch({
          type: TYPES.LOGIN,
          payload: user,
        });
        if (user.type === 'user') {
          util.navigate('userHome');
        } else {
          util.navigate('adminHome');
        }
      }
    } catch (error) {
      console.log('Error', error);
      alert(error.message);
    }
  };
};

const checkUser = (allUsers, curUser) => {
  console.log('all:', allUsers, curUser);
  const user = allUsers.find((user) => user.email === curUser.email);
  if (user) {
    if (user.password === curUser.password) {
      return user;
    } else {
      alert('Invalid password!');
      return false;
    }
  } else {
    alert('User does not exist!');
    return false;
  }
};
export const logoutAction = () => {
  return (dispatch) => {
    dispatch(logout());
    util.navigate('login');
  };
};
