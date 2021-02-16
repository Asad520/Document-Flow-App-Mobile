import * as TYPES from '../../types';
const initialState = {
  forms: [
    {formType: 'Leave', formName: 'Long Leave', formId: 'lv-0'},
    {formType: 'Scholarship', formName: 'Merit Scholarship', formId: 'scs-0'},
    {formType: 'add/drop', formName: 'Add/Drop Subject', formId: 'subj-0'},
  ],
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
