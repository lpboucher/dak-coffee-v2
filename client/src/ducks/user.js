//import { combineReducers } from 'redux';
import axios from 'axios';
import i18n from "i18next";

import {
    UPDATE_CART_REQUEST,
    CLEAR_CART_SUCCESS
} from './cart';

//Action Types
export const LOGIN_REQUEST = 'user/login_request';
export const LOGIN_SUCCESS = 'user/login_success';
export const LOGIN_FAILURE = 'user/login_failure';
export const LOGOUT_REQUEST = 'user/logout_request';
export const LOGOUT_SUCCESS = 'user/logout_success';
export const LOGOUT_FAILURE = 'user/logout_failure';
export const NEWSLETTER_REQUEST = 'user/newsletter_request';
export const NEWSLETTER_SUCCESS = 'user/newsletter_sucess';
export const NEWSLETTER_FAILURE = 'user/newsletter_failure';

//Action Creators
export const login = () => dispatch => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const user = window.Snipcart.api.user.current();
        dispatch({ type: LOGIN_SUCCESS, payload: user });
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

export const addToNewsletter = (name, email) => async dispatch => {
    dispatch({ type: NEWSLETTER_REQUEST, payload: "loading.newsletter.add" });
    const language = i18n.language;
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_PREFIX}/newsletter`, {name, email, language});
        if (res === 'error') {
            dispatch({ type: NEWSLETTER_FAILURE, payload: {newsletter: 'newsletter.error' }})
        } else {
            dispatch({ type: NEWSLETTER_SUCCESS, payload: {newsletter: 'newsletter.registered' }});
        }
    } catch(err) {
        console.log(err)
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
