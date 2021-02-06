import * as TYPES from '../../types';
const initialState = {
  users: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_USER:
      return {
        ...state,
        users: [...state.users, actions.payload],
      };
    case TYPES.DELETE_USER:
      return {
        ...state,
        users: actions.payload,
      };
    default:
      return state;
  }
};
export default reducer;
