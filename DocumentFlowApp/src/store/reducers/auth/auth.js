import * as TYPES from "../../types";
const initialState = {
  user: null,
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_USER:
      return {
        ...state,
        user: actions.user,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        user: actions.user,
      };

    default:
      return state;
  }
};
export default reducer;
