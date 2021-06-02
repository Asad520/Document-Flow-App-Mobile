import axios from 'axios';
import * as TYPES from '../../types';

export const addUser = (newUser) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('clients', newUser);
      dispatch({
        type: TYPES.ADD_USER,
        payload: res.data,
      });
      return res.data;
    } catch (error) {
      if (error.message === 'Request failed with status code 500') {
        alert(`User already exists with Email: ${newUser.email}`);
      } else {
        alert(error.message);
      }
    }
  };
};

export const deleteUser = (user, allUsers) => {
  return async (dispatch) => {
    try {
      await axios.delete('clients/' + user.id);
      dispatch(filterUsers(user, allUsers));
      return true;
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };
};

const filterUsers = (delUser, allUsers) => {
  const newUsers = allUsers.filter((user) => user.id !== delUser.id);
  return {
    type: TYPES.DELETE_USER,
    payload: newUsers,
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('clients');
      dispatch({
        type: TYPES.GET_ALL_USERS,
        payload: res.data,
      });
    } catch (error) {
      alert('Error: ', error.message);
    }
  };
};
