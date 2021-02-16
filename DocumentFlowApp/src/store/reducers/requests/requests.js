import * as TYPES from '../../types';
const initialState = {
  requests: [
    {
      id: '1',
      type: 'leave',
      desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '2',
      type: 'leave',
      desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '3',
      type: 'scholarship',
      desc:
        'Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '4',
      type: 'leave',
      desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '5',
      type: 'scholarship',
      desc: 'Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '6',
      type: 'add',
      desc: 'Mai ko subject parhna hai. Mai ko add karo plis',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '7',
      type: 'leave',
      desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '8',
      type: 'drop',
      desc: 'Mai ni ye parh skta. Mai ko drop karo',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '9',
      type: 'drop',
      desc: 'Mai ni ye parh skta. Mai ko drop karo',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '10',
      type: 'drop',
      desc: 'Mai ni ye parh skta. Mai ko drop karo',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '11',
      type: 'drop',
      desc: 'Mai ni ye parh skta. Mai ko drop karo',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '12',
      type: 'drop',
      desc: 'Mai ni ye parh skta. Mai lko drop karo',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '13',
      type: 'drop',
      desc: 'Mai ni ye parh skta. Mai ko drop karo',
      email: 'bsef17m520',
      status: 'pending',
    },
    {
      id: '14',
      type: 'drop',
      desc: 'Mai ni ye parh skta. Mai ko drop karo',
      email: 'bsef17m520',
      status: 'pending',
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
    default:
      return state;
  }
};
export default reducer;
