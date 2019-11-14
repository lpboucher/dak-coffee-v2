import { combineReducers } from 'redux';
import {responsiveStateReducer} from 'redux-responsive'
import userReducer from '../ducks/user';
import collectionReducer from '../ducks/collections';
import relatedReducer from '../ducks/related';
import categoryReducer from '../ducks/categories';
import subscriptionReducer from '../ducks/subscriptions';
import cartReducer from '../ducks/cart';
import viewReducer from '../ducks/views';
import productReducer from '../ducks/products';
import articleReducer from '../ducks/articles';

export default combineReducers({
    user: userReducer,
    browser: responsiveStateReducer,
    products: productReducer,
    cart: cartReducer,
    collections: collectionReducer,
    related: relatedReducer,
    categories: categoryReducer,
    subscriptions: subscriptionReducer,
    views: viewReducer,
    articles: articleReducer
});