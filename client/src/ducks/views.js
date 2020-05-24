import { fetchCartItems } from './cart';
import i18n from "i18next";

//Action Types
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    NEWSLETTER_REQUEST,
    NEWSLETTER_SUCCESS,
    NEWSLETTER_FAILURE
} from './user';

import {
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
    CLEAR_CART_SUCCESS,
    FETCH_CART_REQUEST,
    FETCH_CART_SUCCESS,
    //PROMO_CART_FAILURE,
    FETCH_CART_FAILURE,
    INITIALIZE_CART_SUCCESS
} from './cart';

import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
} from './products';

import {
    FETCH_ARTICLES_FAILURE
} from './articles';



export const OPEN_CART = 'views/open_cart';
export const CLOSE_CART = 'views/close_cart';
export const SNIP_OPEN = 'views/snip_open';
export const SNIP_CLOSE = 'views/snip_close';
export const OPEN_MOBILE = 'views/open_mobile';
export const CLOSE_MOBILE = 'views/close_mobile';
export const OPEN_PROMO = 'views/open_promo';
export const CLOSE_PROMO = 'views/close_promo';
export const CHANGE_CURRENCY_REQUEST = 'views/change_currency_request';
export const CHANGE_CURRENCY_SUCCESS = 'views/change_currency_success';
export const CHANGE_LANGUAGE_REQUEST = 'views/change_language_request';
export const CHANGE_LANGUAGE_SUCCESS = 'views/change_language_success';
export const ACTIVATE_LOCATION = 'views/activate_location';

//Action Creators
export const openSnipcart = () => dispatch => {
    dispatch({type: SNIP_OPEN})
}

export const closeSnipcart = () => dispatch => {
    dispatch({type: SNIP_CLOSE})
}

// new
export const openCartSummary = () => dispatch => {
    dispatch({type: OPEN_CART})
}

// new
export const closeCartSummary = () => dispatch => {
    dispatch({type: CLOSE_CART})
}

//new
export const switchOption = (type, key) => (dispatch) => {
  if (type === "language") {
    dispatch(switchLanguage(key))
  }
  if (type === "currency") {
    dispatch(switchDisplayCurrency(key))
  }
}

// new
export const switchLanguage = (lang=null) => (dispatch) => {
    if(!lang) {
        window.Snipcart.setLang(i18n.language);
        i18n.changeLanguage(i18n.language.substr(0,2));
        dispatch({type: CHANGE_LANGUAGE_SUCCESS, payload: i18n.language});
    } else {
        dispatch({type: CHANGE_LANGUAGE_REQUEST, payload: "loading.language"})
        try {
            window.Snipcart.setLang(lang);
            i18n.changeLanguage(lang);
            dispatch({type: CHANGE_LANGUAGE_SUCCESS, payload: lang});
        } catch (err) {
            console.log(err);
        }
    }
}

//new
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

export const trackLocation = (country) => dispatch => {
  dispatch({type: ACTIVATE_LOCATION, payload: country})
}
export const openMobileMenu = () => dispatch => {
    dispatch({type: OPEN_MOBILE})
}

export const closeMobileMenu = () => dispatch => {
    dispatch({type: CLOSE_MOBILE})
}

export const openPromotion = () => dispatch => {
    dispatch({type: OPEN_PROMO})
}

export const closePromotion = () => dispatch => {
    dispatch({type: CLOSE_PROMO})
}

//Reducer
const initialState = {
isSnipcartModalOpen: false,
isMobileOpen: false,
isProcessing: true,
//to be removed once fetching is specific to products
isFetching: false,
isPromoOpen: false,
processingText: "loading.initial",
error: {
    global: "",
    account: "",
    promo: "",
    newsletter: "",
    cart: ""
},
displayCurrency: "EUR",
displayLang: "EN",
showError: false,
clientLocation: "World",
//new
addingToCart: {
  productId: "",
  adding: false
},
changingLoginStatus: false,
isCartOpen: false,
isCartLoaded: false
};

export default function reducer(state = initialState, action) {
switch(action.type) {
    case OPEN_CART:
        return {
            ...state,
            isCartOpen: true,
            error: initialState.error
        };
    case CLOSE_CART:
        return {
            ...state,
            isCartOpen: false,
            error: initialState.error
        };
    case OPEN_MOBILE:
        return {
            ...state,
            isMobileOpen: true,
            error: initialState.error
        };
    case CLOSE_MOBILE:
        return {
            ...state,
            isMobileOpen: false,
            error: initialState.error
        };
    case OPEN_PROMO:
        return {
            ...state,
            isPromoOpen: true,
        };
    case CLOSE_PROMO:
        return {
            ...state,
            isPromoOpen: false,
        };
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
    case FETCH_CART_REQUEST:
          return {
            ...state,
            addingToCart: {
              ...state.addingToCart,
              productId: "",
              adding: true
            },
        }
    case UPDATE_CART_REQUEST:
        return {
            ...state,
            isFetching: true,
            isProcessing: true,
            addingToCart: {
              ...state.addingToCart,
              productId: action.payload,
              adding: true
            },
            processingText: "cart.updating"
        }
    case UPDATE_CART_SUCCESS:
    case CLEAR_CART_SUCCESS:
        return {
            ...state,
            isFetching: false,
            isProcessing: false,
            processingText: "",
            addingToCart: {
              ...state.addingToCart,
              productId: "",
              adding: false
            },
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
        return {
            ...state,
            isProcessing: false,
            error: {...state.error, ...action.payload},
            processingText: "" };
    case CHANGE_LANGUAGE_SUCCESS:
        return {
            ...state,
            isProcessing: false,
            processingText: "",
            displayLang:  action.payload};
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
    case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
    case FETCH_CART_SUCCESS:
    case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
            }
    case FETCH_PRODUCTS_FAILURE:
    case FETCH_CART_FAILURE:
    case FETCH_ARTICLES_FAILURE:
        return {
            ...state,
            error: {...state.error, ...action.payload},
            showError: true,
            isFetching: false
        }
    case ACTIVATE_LOCATION:
      return {
        ...state,
        clientLocation: action.payload,
      }
    case INITIALIZE_CART_SUCCESS:
      return {
        ...state,
        isCartLoaded: true,
      }
    default:
        return state;
}
}

//Selectors
export const isPromoOpen = (state) => state.views.isPromoOpen;

export const isSnipOpen = (state) => state.views.isSnipcartModalOpen;

export const isFetching = (state) => state.views.isFetching;

export const isMobileOpen = (state) => state.views.isMobileOpen;

export const isProcessing = (state) => state.views.isProcessing;

export const getProcessingText = (state) => state.views.processingText;

export const getLocation = (state) => state.views.clientLocation;

export const getMediaSize = (state) => state.browser.mediaType;

export const hasError = (state) => state.views.showError;

export const getError = (state) => state.views.error;

// new
export const isAdding = (state) => state.views.addingToCart;

export const getActiveOption = (state, optionType) => {
  if (optionType === "language") {
    return getDisplayLang(state)
  }
  if (optionType === "currency") {
    return getDisplayCurrency(state)
  }
}

export const isCartLoaded = (state) => state.views.isCartLoaded;

export const getDisplayLang = (state) => state.views.displayLang;

export const getDisplayCurrency = (state) => state.views.displayCurrency;

//to use for bottom of screen pop-up
export const isCartOpen = (state) => state.views.isCartOpen;

export const isCheckingLoginStatus = (state) => state.views.changingLoginStatus;


