import {
  LOGIN,
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  SHOW_CAMERA,
  CLOSE_CAMERA,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  SET_BARCODE,
  ADD_TO_CART, REMOVE
} from './types';
import { products } from '../data/Products';

export const login = (username) => {
  return {
    type: LOGIN,
    payload: username
  };
};

export const usernameChanged = (username) => {
  return {
    type: USERNAME_CHANGED,
    payload: username
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const showCamera = () => {
  return {
    type: SHOW_CAMERA
  };
};

export const closeCamera = () => {
  return {
    type: CLOSE_CAMERA
  };
};

export const setBarcode = (barcode) => {
  return {
    type: SET_BARCODE,
    payload: barcode
  };
};

export const getProduct = (barcode) => {
  return (dispatch) => {
    dispatch({type: GET_PRODUCT});
    for(let i=0;i<products.length;i++) {
      if(products[i].barcode==barcode) {
        console.log('Product: ', products[i]);
        dispatch({
          type: GET_PRODUCT_SUCCESS,
          payload: products[i]
        });
      } else {
        console.log('No product data available');
        dispatch({
          type: GET_PRODUCT_FAIL
        });
      }
    }
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const remove = (product) => {
  return {
    type: REMOVE,
    payload: product
  }
}
