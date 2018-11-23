import axios from '../node_modules/axios';
import {fetchListAction} from  './fetchList-action.js';

export const ADD_PRODUCT_BEGIN   = 'ADD_PRODUCT_BEGIN';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

export const addProductBegin = () => ({
  type: ADD_PRODUCT_BEGIN
});

export const addProductSuccess = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: { product }
});

export const addProductFailure = error => ({
  type: ADD_PRODUCT_FAILURE,
  payload: { error }
});

export function addListAction(requestData) {
  return dispatch => {
    dispatch(addProductBegin());
    return axios.post('http://localhost:5000/api/items/',{ "name" : requestData})
      .then(json => {
        dispatch(addProductSuccess(json.data));
		dispatch(fetchListAction());
        return json.data;
      })
      .catch(error => dispatch(addProductFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}