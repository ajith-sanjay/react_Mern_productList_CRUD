

import {
  ADD_PRODUCT_BEGIN,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE
} from '../actions/addList-action';

const initialState = {
  item: [],
  loading: false,
  error: null
};

export function adderReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        item : state.item,
        loading: true,
        error: null
      };

    case ADD_PRODUCT_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        item : state.item,
        loading: false,
        items: action.payload.product
      };

    case ADD_PRODUCT_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the items
      // around! Do whatever seems right.
      return {
        item : state.item,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}