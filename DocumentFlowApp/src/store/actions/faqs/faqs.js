import axios from 'axios';
import * as TYPES from '../../types';

export const getAllFaqs = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('faqs');
      dispatch({
        type: TYPES.GET_ALL_FAQS,
        payload: res.data,
      });
    } catch (error) {
      alert('Error: ', error.message);
    }
  };
};
