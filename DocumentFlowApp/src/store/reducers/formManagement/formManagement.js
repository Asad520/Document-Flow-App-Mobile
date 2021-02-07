import * as TYPES from '../../types';
const initialState = {
  forms: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.ADD_FORM:
      return {
        ...state,
        forms: [...state.forms, actions.payload],
      };
    case TYPES.DELETE_FORM:
      return {
        ...state,
        forms: actions.payload,
      };
    default:
      return state;
  }
};
export default reducer;
