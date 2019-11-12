//import { clearCart } from './cart';
import { fetchCartItems } from './cart';
import i18n from "i18next";

//Action Types
/*import { 
    SUBMIT_PAYMENT_REQUEST,
    SUBMIT_PAYMENT_CONFIRM,
    SUBMIT_PAYMENT_FAILURE,
    SUBMIT_PAYMENT_SUCCESS
} from './payments';*/

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    /*REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    UPDATE_REQUEST,
    UPDATE_SUCCESS,
    FETCH_SUCCESS,*/
    NEWSLETTER_REQUEST,
    NEWSLETTER_SUCCESS,
    NEWSLETTER_FAILURE
} from './user';

/*import {
    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_SUCCESS,
    ORDER_FINALIZE_REQUEST
} from './checkout';*/

import {
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
    CLEAR_CART_SUCCESS,
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    //PROMO_CART_FAILURE,
    //FETCH_CART_FAILURE
} from './cart';

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE
} from './products';

export const OPEN_CART = 'views/open_cart';
export const CLOSE_CART = 'views/close_cart';
export const SNIP_OPEN = 'views/snip_open';
export const SNIP_CLOSE = 'views/snip_close';
export const CHANGE_CURRENCY_REQUEST = 'views/change_currency_request';
export const CHANGE_CURRENCY_SUCCESS = 'views/change_currency_success';
export const CHANGE_LANGUAGE_REQUEST = 'views/change_language_request';
export const CHANGE_LANGUAGE_SUCCESS = 'views/change_language_success';
/*export const OPEN_ERROR = 'views/open_error';
export const CLOSE_ERROR = 'views/close_error';
export const OPEN_MOBILE = 'views/open_mobile';
export const CLOSE_MOBILE = 'views/close_mobile';

const APPLY_MINI_HEADER = 'views/apply_mini_header';
const REMOVE_MINI_HEADER = 'views/remove_mini_header';
const SCROLL_HEIGHT = 'views/scroll_height'*/


//Action Creators
export const openSnipcart = () => dispatch => {
    dispatch({type: SNIP_OPEN})
}

export const closeSnipcart = () => dispatch => {
    dispatch({type: SNIP_CLOSE})
}

export const openCartSummary = () => dispatch => {
    dispatch({type: OPEN_CART})
}

export const closeCartSummary = () => dispatch => {
    dispatch({type: CLOSE_CART})
}

export const switchDisplayCurrency = (currency) => (dispatch) => {
    dispatch({type: CHANGE_CURRENCY_REQUEST, payload: "loading.currency"})
    try {
        const newCurrency = window.Snipcart.api.cart.currency(currency);
        dispatch({type: CHANGE_CURRENCY_SUCCESS, payload: newCurrency.toUpperCase()})
        dispatch(fetchCartItems())
    } catch (err) {
        console.log(err)
        dispatch({type: CHANGE_CURRENCY_SUCCESS, payload: 'EUR'})
        dispatch(fetchCartItems())
    }
}

export const switchLanguage = (lang=null) => (dispatch) => {
    if(!lang) {
        window.Snipcart.setLang(i18n.language);
    } else {
        dispatch({type: CHANGE_LANGUAGE_REQUEST, payload: "loading.language"})
        try {
            window.Snipcart.setLang(lang);
            i18n.changeLanguage(lang);
            dispatch({type: CHANGE_LANGUAGE_SUCCESS});
        } catch (err) {
            console.log(err);
        }
    }
}

/*export const openMobileMenu = () => dispatch => {
    dispatch({type: OPEN_MOBILE})
}

export const closeMobileMenu = () => dispatch => {
    dispatch({type: CLOSE_MOBILE})
}

export const switchDisplayCurrency = (currency) => (dispatch, getState) => {
    const cart = getState()['cart']
    if(
        cart.allIds.length > 0 &&
        cart.meta.display_price.with_tax.currency !== currency 
    ) {
        dispatch(clearCart())
    }
    dispatch({type: CHANGE_CURRENCY_REQUEST, payload: "loading.currency"})
    dispatch(fetchProducts(currency))
    dispatch({type: CHANGE_CURRENCY_SUCCESS, payload: currency})
}

export const openError = (error) => dispatch => {
    dispatch({type: OPEN_ERROR, payload: error})

    setTimeout(() => dispatch(closeError()), 1700)
}

export const closeError = () => dispatch => {
    dispatch({type: CLOSE_ERROR})
}*/


//Reducer
const initialState = {
isSnipcartModalOpen: false,
isCartOpen: false,
isMobileOpen: false,
isProcessing: true,
isFetching: false,
changingLoginStatus: false,
processingText: "loading.initial",
error: {
    global: "",
    account: "",
    promo: "",
    newsletter: "",
    cart: ""
},
displayCurrency: "EUR",
showError: false
};

export default function reducer(state = initialState, action) {
switch(action.type) {
    case OPEN_CART:
        return { ...state, isCartOpen: true, error: initialState.error };
    case CLOSE_CART:
        return { ...state, isCartOpen: false, error: initialState.error };
    case CHANGE_LANGUAGE_REQUEST:
    case CHANGE_CURRENCY_REQUEST:
    case NEWSLETTER_REQUEST:
        return { 
            ...state,
            isProcessing: true,
            processingText: action.payload,
            error: initialState.error
         };
    case CHANGE_CURRENCY_SUCCESS:
        return {
            ...state,
            isProcessing: false,
            error: initialState.error,
            processingText: "",
            displayCurrency: action.payload
        }
    case UPDATE_CART_REQUEST:
        return { 
            ...state,
            isFetching: true,
        }
    case UPDATE_CART_SUCCESS:
    case CLEAR_CART_SUCCESS:
        return {
            ...state,
            isFetching: false,
        }
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
        return {
            ...state,
            changingLoginStatus: true,
        }
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
    case LOGOUT_FAILURE:
        return {
            ...state,
            changingLoginStatus: false,
        }
    case NEWSLETTER_SUCCESS:
    case NEWSLETTER_FAILURE:
    case CHANGE_LANGUAGE_SUCCESS:
        return { 
            ...state,
            isProcessing: false,
            error: {...state.error, ...action.payload},
            processingText: "" };
    case SNIP_OPEN:
        return {
            ...state,
            isSnipcartModalOpen: true,
        }
    case SNIP_CLOSE:
        return {
            ...state,
            isSnipcartModalOpen: false,
        }
    /*case OPEN_ERROR:
            return { ...state, showError: true, error: action.payload };
    case CLOSE_ERROR:
            return { ...state, showError: false, error: initialState.error };
    case OPEN_MOBILE:
        return { ...state, isMobileOpen: true, error: initialState.error };
    case CLOSE_MOBILE:
        return { ...state, isMobileOpen: false, error: initialState.error };
    case CHANGE_CURRENCY_SUCCESS:
        return { ...state,
            isProcessing: false,
            error: initialState.error,
            processingText: "",
            displayCurrency: action.payload 
        };
    case CHANGE_CURRENCY_REQUEST:
    case SUBMIT_PAYMENT_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case REGISTER_REQUEST:
    case SUBMIT_ORDER_REQUEST:
    case FETCH_CART_REQUEST:
    case ORDER_FINALIZE_REQUEST:
    case UPDATE_REQUEST:
    case NEWSLETTER_REQUEST:
        return { ...state,
            isProcessing: true,
            processingText: action.payload,
            error: initialState.error
         };
    case SUBMIT_PAYMENT_CONFIRM:
        return { ...state,
            isProcessing: true,
            processingText: action.processing,
            };
    case SUBMIT_PAYMENT_FAILURE:
    case SUBMIT_PAYMENT_SUCCESS:
    case LOGIN_SUCCESS:
    case LOGOUT_SUCCESS:
    case REGISTER_SUCCESS:
    case SUBMIT_ORDER_SUCCESS:
    case FETCH_CART_SUCCESS:
    case UPDATE_SUCCESS:
    case FETCH_SUCCESS:
        return { ...state,
                isProcessing: false,
                error: initialState.error,
                processingText: "" };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case PROMO_CART_FAILURE:
    case NEWSLETTER_SUCCESS:
    case NEWSLETTER_FAILURE:
            return { 
                ...state,
                isProcessing: false,
                error: {...state.error, ...action.payload},
                processingText: "" };
    case FETCH_CART_FAILURE:
            return {
                ...state,
                isProcessing: false,
                processingText: ""
            }*/
    case FETCH_CART_REQUEST:
    case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
    case FETCH_CART_SUCCESS:
    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isFetching: false
            }
    default:
        return state;
}
}

//Selectors
export const isCartOpen = (state) => state.views.isCartOpen;

export const isSnipOpen = (state) => state.views.isSnipcartModalOpen;

export const isFetching = (state) => state.views.isFetching;

export const isMobileOpen = (state) => state.views.isMobileOpen;

export const isProcessing = (state) => state.views.isProcessing;

export const isCheckingLoginStatus = (state) => state.views.changingLoginStatus;

export const getProcessingText = (state) => state.views.processingText;

export const getDisplayCurrency = (state) => state.views.displayCurrency;

export const getMediaSize = (state) => state.browser.mediaType;

/*export const hasError = (state) => state.views.showError;

*/

export const getError = (state) => state.views.error;


