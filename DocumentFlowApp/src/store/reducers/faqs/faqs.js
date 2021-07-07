import * as TYPES from '../../types';
const initialState = {
  faqs: [],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.GET_ALL_FAQS:
      return {
        ...state,
        faqs: actions.payload,
      };

    default:
      return state;
  }
};
export default reducer;
