import axios from 'axios';
import * as TYPES from '../../types';

export const addRequest = (newRequest) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('requests', newRequest);
      dispatch({
        type: TYPES.ADD_REQUEST,
        payload: res.data,
      });
      return true;
    } catch (error) {
      alert('Error: ', error.message);
    }
  };
};

export const saveRequests = (request, allRequests) => {
  return async (dispatch) => {
    try {
      const res = await axios.put('requests/' + request.id, request);
      dispatch(filterRequests(request, allRequests));
      return true;
    } catch (error) {
      alert('Error:' + error.message);
    }
  };
};
const filterRequests = (request, allRequests) => {
  const newRequests = allRequests.map((req) => {
    if (req.id !== request.id) {
      return req;
    } else {
      return request;
    }
  });
  return {
    type: TYPES.SAVE_REQUESTS,
    payload: newRequests,
  };
};

export const getAllRequests = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('requests');
      dispatch({
        type: TYPES.GET_ALL_REQUESTS,
        payload: res.data,
      });
    } catch (error) {
      alert('Error: ', error.message);
    }
  };
};
