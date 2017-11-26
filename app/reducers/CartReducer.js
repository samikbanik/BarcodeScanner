import { ADD_TO_CART, REMOVE } from '../actions/types';

const INITIAL_STATE = {
  cart: []
};

export default (state=INITIAL_STATE, action) => {
  const { cart } = state;
  switch(action.type) {
    case ADD_TO_CART:
      cart.push(action.payload);
      return { ...state, cart };
    case REMOVE:
      for ( i = 0; i < cart.length; i++ )
      {
        if (cart[i] == action.payload)
        {
            cart.splice(i,1);
        }
      }
      return { ...state, cart };
    default:
      return state;
  }
};
