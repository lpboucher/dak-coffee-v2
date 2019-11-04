import { combineReducers } from 'redux';
import {responsiveStateReducer} from 'redux-responsive'
import userReducer from '../ducks/user';
import collectionReducer from '../ducks/collections';
import relatedReducer from '../ducks/related';
import categoryReducer from '../ducks/categories';
import subscriptionReducer from '../ducks/subscriptions';
//import thumbnailReducer from '../ducks/thumbnails';
import cartReducer from '../ducks/cart';
/*import checkoutReducer from '../ducks/checkout';
import paymentReducer from '../ducks/payments';*/
import viewReducer from '../ducks/views';
//import stockReducer from '../ducks/inventories';
import productReducer from '../ducks/products';

export default combineReducers({
    user: userReducer,
    browser: responsiveStateReducer,
    products: productReducer,
    cart: cartReducer,
    collections: collectionReducer,
    related: relatedReducer,
    categories: categoryReducer,
    subscriptions: subscriptionReducer,
    //thumbnails: thumbnailReducer,
    //checkout: checkoutReducer,
    //payments: paymentReducer,
    views: viewReducer,
    //inventories: stockReducer
});