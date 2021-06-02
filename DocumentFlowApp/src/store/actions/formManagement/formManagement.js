import axios from 'axios';
import * as TYPES from '../../types';

export const addForm = (newForm) => {
  console.log('form:', newForm);
  return async (dispatch) => {
    try {
      const res = await axios.post('forms', newForm);
      if (res.data) {
        dispatch({
          type: TYPES.ADD_FORM,
          payload: res.data,
        });
        return 'new';
      }
    } catch (error) {
      console.log(`error`, error);
      if (error.message === 'Request failed with status code 500') {
        alert(`Form already exists with ID: ${newForm.formId}`);
      } else {
        alert(error.message);
      }
    }
  };
};

export const deleteForm = (form, allForms) => {
  console.log(`form.id`, form.id);
  return async (dispatch) => {
    try {
      await axios.delete('forms/' + form.id);
      dispatch(filterForms(form, allForms));
      return true;
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };
};

const filterForms = (delForm, allForms) => {
  const newForms = allForms.filter((form) => form.id !== delForm.id);
  return {
    type: TYPES.DELETE_FORM,
    payload: newForms,
  };
};

export const getAllForms = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('forms');
      dispatch({
        type: TYPES.GET_ALL_FORMS,
        payload: res.data,
      });
    } catch (error) {
      alert('Error: ', error.message);
    }
  };
};
