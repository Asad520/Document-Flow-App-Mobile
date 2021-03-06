import * as TYPES from '../../types';
const initialState = {
  requests: [
    {
      id: '1',
      type: 'leave',
      desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
      email: 'bsef17m520',
      status: 'pending',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '2',
      type: 'leave',
      desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
      email: 'bsef17m520',
      status: 'pending',
      date: new Date().toLocaleDateString(),
    },
    {
      id: '3',
      type: 'scholarship',
      desc:
        'Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do',
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
