import { GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, SET_BARCODE } from '../actions/types';

const INITIAL_STATE = {
  barcode: '',
  productDetails: {},
  loading: false,
  error: ''
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_BARCODE:
      return { ...state, barcode: action.payload };
    case GET_PRODUCT:
      return { ...state, loading: true, error: '' };
    case GET_PRODUCT_SUCCESS:
      return { ...state, productDetails: action.payload, loading: false };
    case GET_PRODUCT_FAIL:
      return { ...state, loading: false, error: 'Failed to fetch product' };
    default:
      return state;
  }
};
