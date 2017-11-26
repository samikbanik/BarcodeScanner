import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProductReducer from './ProductReducer';
import CameraReducer from './CameraReducer';
import CartReducer from './CartReducer';

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        auth: AuthReducer,
        product: ProductReducer,
        camera: CameraReducer,
        productCart: CartReducer
    });
};
