import * as TYPES from '../../types';
const initialState = {
  requests: [
    {
      id: '1',
      type: 'leave',
      desc:
        "HI, i've been tested positive for Covid-19 and won't b able to attend university for at least 14 days as precautionary measures. Kindly approve my leave.",
      email: 'bsef17m520',
      status: 'pending',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      type: 'leave',
      desc: 'Test leave 123.',
      email: 'bsef17m520',
      status: 'pending',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '3',
      type: 'scholarship',
      desc:
        "Sir, as you know i've maintained a cgpa of more than 3.5 for last 2 semesters, i qualify for the merit scholarship provided by university. I just need your approval for this.\n\nRegards",
      email: 'bsef17m520',
      status: 'pending',
      date: new Date().toLocaleDateString(),
    },
  ],
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
    default:
      return state;
  }
};
export default reducer;
