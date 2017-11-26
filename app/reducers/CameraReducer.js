import { SHOW_CAMERA, CLOSE_CAMERA } from '../actions/types';

const INITIAL_STATE = {
  cameraOpen: true
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case SHOW_CAMERA:
      return { cameraOpen: true };
    case CLOSE_CAMERA:
      return { cameraOpen: false };
    default:
      return state;
  }
};
