import * as TYPES from '../../types';
const initialState = {
  requests: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_REQUEST:
      return {
        ...state,
        requests: [...state.requests, actions.payload],
      };
    case TYPES.SAVE_REQUESTS:
      return {
        ...state,
        requests: actions.payload,
      };
    case TYPES.GET_ALL_REQUESTS:
      return {
        ...state,
        requests: actions.payload,
      };
    default:
      return state;
  }
};
export default reducer;
