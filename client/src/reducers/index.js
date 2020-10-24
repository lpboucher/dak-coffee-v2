import { combineReducers } from 'redux';
import {responsiveStateReducer} from 'redux-responsive'
import userReducer from '../ducks/user';
import collectionReducer from '../ducks/collections';
import similarReducer from '../ducks/similar';
import categoryReducer from '../ducks/categories';
import subscriptionReducer from '../ducks/subscriptions';
import cartReducer from '../ducks/cart';
import viewReducer from '../ducks/views';
import productReducer from '../ducks/products';
import articleReducer from '../ducks/articles';
import termReducer from '../ducks/terms';
import faqReducer from '../ducks/faq';

export default combineReducers({
    user: userReducer,
    browser: responsiveStateReducer,
    products: productReducer,
    cart: cartReducer,
    collections: collectionReducer,
    similar: similarReducer,
    categories: categoryReducer,
    subscriptions: subscriptionReducer,
    views: viewReducer,
    articles: articleReducer,
    terms: termReducer,
    faqs: faqReducer
});
