import * as TYPES from '../../types';
const initialState = {};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
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
