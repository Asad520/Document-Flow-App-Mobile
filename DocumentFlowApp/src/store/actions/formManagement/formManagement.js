import * as TYPES from '../../types';

export const addForm = (newForm, allForms) => {
  return (dispatch) => {
    const found = checkForm(newForm, allForms);
    if (found) {
      console.log('Form already exists');
      return 'old';
    } else {
      console.log('Form added');
      dispatch(addFormSuccess(newForm));
      return 'new';
    }
  };
};

const checkForm = (newForm, allForm) => {
  const found = allForm.find((form) => form.formId === newForm.formId);
  if (found) {
    return true;
  } else return false;
};

const addFormSuccess = (newForm) => {
  return {
    type: TYPES.ADD_FORM,
    payload: newForm,
  };
};

export const deleteForm = (formId, allForms) => {
  return (dispatch) => {
    dispatch(filterForms(formId, allForms));
    return true;
  };
};

const filterForms = (formId, allForms) => {
  const newForms = allForms.filter((form) => form.formId !== formId);
  return {
    type: TYPES.DELETE_FORM,
    payload: newForms,
  };
};
