import axios from 'axios';
import * as TYPES from '../../types';

export const addRequest = (newRequest) => {
  return {
    type: TYPES.ADD_REQUEST,
    payload: newRequest,
  };
};

export const saveRequests = (request, allRequests) => {
  // console.log('requesTt:', allRequests);
  return async (dispatch) => {
    try {
      const res = await axios.put('requests/' + request.id, request);
      console.log('res: .', res);
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
