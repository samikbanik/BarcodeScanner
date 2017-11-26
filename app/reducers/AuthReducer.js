import { LOGIN, USERNAME_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  user: '',
  error: ''
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
