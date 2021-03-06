import respondRequests from '../../../pages/admin/respondRequests/respondRequests';
import * as TYPES from '../../types';

export const addRequest = (newRequest) => {
  return {
    type: TYPES.ADD_REQUEST,
    payload: newRequest,
  };
};

export const saveRequests = (allRequests) => {
  return {
    type: TYPES.SAVE_REQUESTS,
    payload: allRequests,
  };
};
