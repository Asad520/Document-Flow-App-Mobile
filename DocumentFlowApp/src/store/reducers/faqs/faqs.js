import * as TYPES from '../../types';
const initialState = {
  faqs: [
    {id: '1', que: 'How to request form?', ans: 'This the answer'},
    {id: '2', que: 'No response from admin?', ans: 'This the answer'},
    {id: '3', que: 'About this app', ans: 'This the answer'},
    {id: '4', que: 'This is a question', ans: 'This the answer'},
    {id: '5', que: 'This is a question', ans: 'This the answer'},
    {id: '6', que: 'This is a question', ans: 'This the answer'},
    {id: '7', que: 'This is a question', ans: 'This the answer'},
    {id: '8', que: 'This is a question', ans: 'This the answer'},
  ],
};
const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.SAVE_FAQS:
      return {
        ...state,
        faqs: [...state.faqs, actions.payload],
      };

    default:
      return state;
  }
};
export default reducer;
