import * as util from '../../../utilities';
import axios from 'axios';
import * as TYPES from '../../types';

const logout = () => {
  return {
    type: TYPES.LOGOUT,
    user: null,
  };
};
export const loginAction = (params) => {
  return (dispatch) => {
    dispatch(TASKS.showLoader());
    axios
      .post(`phone_verification.json`, {
        phone: params.phone,
      })
      .then(function (response) {
        dispatch(TASKS.hideLoader());
        util.navigate('OTP', {
          phoneData: {phone: params.phone, message: response.data.message},
        });
      })
      .catch(function (error) {
        util.showToast('Number not registered.');
        dispatch(TASKS.hideLoader());
      });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    dispatch(logout());
    util.navigate('login');
  };
};
