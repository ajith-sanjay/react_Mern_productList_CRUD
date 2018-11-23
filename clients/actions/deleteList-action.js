import axios from '../node_modules/axios';
import {fetchListAction} from  './fetchList-action.js';

export const DELETE_PRODUCT_BEGIN   = 'DELETE_PRODUCT_BEGIN';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export const deleteProductBegin = () => ({
  type: DELETE_PRODUCT_BEGIN
});

export const deleteProductSuccess = product => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: { product }
});

export const deleteProductFailure = error => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: { error }
});

export function deleteListAction(requestData) {
  return dispatch => {
    dispatch(deleteProductBegin());
    return axios.delete('http://localhost:5000/api/items/'+ requestData)
      .then(json => {
        dispatch(deleteProductSuccess(json.data));
		dispatch(fetchListAction());
        return json.data;
      })
      .catch(error => dispatch(deleteProductFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}