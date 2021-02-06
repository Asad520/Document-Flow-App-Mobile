import * as TYPES from '../../types';

export const addUser = (newUser, allUsers) => {
  return (dispatch) => {
    const found = checkUser(newUser, allUsers);
    if (found) {
      console.log('User already exists');
      return 'old';
    } else {
      console.log('User added');
      dispatch(addUserSuccess(newUser));
      return 'new';
    }
  };
};

const checkUser = (newUser, allUsers) => {
  const found = allUsers.find((user) => user.email === newUser.email);
  if (found) {
    return true;
  } else return false;
};

const addUserSuccess = (newUser) => {
  return {
    type: TYPES.ADD_USER,
    payload: newUser,
  };
};

export const deleteUser = (email, allUsers) => {
  return (dispatch) => {
    dispatch(filterUsers(email, allUsers));
    return true;
  };
};

const filterUsers = (email, allUsers) => {
  const newUsers = allUsers.filter((user) => user.email !== email);
  return {
    type: TYPES.DELETE_USER,
    payload: newUsers,
  };
};
