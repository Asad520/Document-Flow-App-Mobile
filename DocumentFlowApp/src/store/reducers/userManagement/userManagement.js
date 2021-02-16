import * as TYPES from '../../types';
const initialState = {
  users: [
    {
      fName: 'Asad',
      lName: 'butt',
      email: 'bsef17m520@pucit.edu.pk',
      password: '123',
      type: 'admin',
    },
    {
      fName: 'Hassan',
      lName: 'Ballu',
      email: 'bsef17m541@pucit.edu.pk',
      password: '123',
    },
    {
      fName: 'Minahil',
      lName: 'Mustfa',
      email: 'bsef17m518@pucit.edu.pk',
      password: '123',
    },
    {
      fName: 'Zain',
      lName: 'Abid',
      email: 'bsef17m517@pucit.edu.pk',
      password: '123',
    },
  ],
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
