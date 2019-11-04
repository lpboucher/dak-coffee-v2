//import { combineReducers } from 'redux';
import axios from 'axios';
import i18n from "i18next";
import LogRocket from 'logrocket';

import {
    UPDATE_CART_REQUEST,
    CLEAR_CART_SUCCESS
} from './cart';

//Action Types
export const LOGIN_REQUEST = 'user/login_request';
export const LOGIN_SUCCESS = 'user/login_success';
export const LOGIN_FAILURE = 'user/login_failure';
/*export const FETCH_REQUEST = 'user/fetch_request';
export const FETCH_SUCCESS = 'user/fetch_success';
export const FETCH_FAILURE = 'user/fetch_fail';
export const UPDATE_REQUEST = 'user/update_request';
export const UPDATE_SUCCESS = 'user/update_success';
export const UPDATE_FAILURE = 'user/update_fail';
export const REGISTER_REQUEST = 'user/register_request';
export const REGISTER_SUCCESS = 'user/register_success';
export const REGISTER_FAILURE = 'user/register_failure';*/
export const LOGOUT_REQUEST = 'user/logout_request';
export const LOGOUT_SUCCESS = 'user/logout_success';
export const LOGOUT_FAILURE = 'user/logout_failure';
/*export const ORDERS_REQUEST = 'user/orders_request';
export const ORDERS_SUCCESS = 'user/orders_success';
export const ORDERS_FAILURE = 'user/orders_failure';
export const NEWSLETTER_REQUEST = 'user/newsletter_request';
export const NEWSLETTER_SUCCESS = 'user/newsletter_sucess';
export const NEWSLETTER_FAILURE = 'user/newsletter_failure';*/

//Action Creators
export const login = () => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const user = window.Snipcart.api.user.current();
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        LogRocket.identify(user.id, {
            email: user.email,
          });
    } catch(err) {
        dispatch({ type: LOGIN_FAILURE });
    }
}

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT_REQUEST });
    try {
        window.Snipcart.api.user.logout();
        dispatch({ type: LOGOUT_SUCCESS });
        dispatch({ type: UPDATE_CART_REQUEST });
        dispatch({ type: CLEAR_CART_SUCCESS });
    } catch(err) {
        dispatch({ type: LOGOUT_FAILURE });
    }
}

const initialState = {
    id: "",
    session: "",
    email: "",
};

//Reducers
const user = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                session: action.payload.sessionToken,
                email: action.payload.email,
            }
        case LOGOUT_SUCCESS:
            return initialState
        default:
            return state
    }
}

export default user;

//Selectors
export const getLoggedInStatus = (state) => state.user.session !== "";

/*export const getUser = (state) => state.user.info;

export const getUserID = (state) => state.user.info.stripe_id;

export const getUserPaymentMethod = (state) => {
    if (state.user.info.invoice_settings && state.user.info.invoice_settings.default_payment_method) {
            return state.user.info.invoice_settings.default_payment_method
        }
        return {}
};

export const getOrder = (state, id) => state.user.orders.byId[id];

export const getAllOrders = (state) => state.user.orders.allIds.map(id => getOrder(state, id));

export const getOrdersByIds = (state) => state.user.orders.byId;

export const getUserAddress = (state) => {
    const ship = state.user.info.shipping ? 
    {
        name: state.user.info.shipping.name,
        ...state.user.info.shipping.address
    } : {
        name: "",
        address: {}
    }
    const bill = state.user.info.address ? state.user.info.address : {}
    return {
        billing: bill,
        shipping: ship
    }  
}

export const getUserSubscriptions = (state) => state.user.info.subscriptions;
*/
