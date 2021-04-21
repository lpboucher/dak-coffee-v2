import i18n from "i18next";
import { combineReducers } from 'redux';
import { LANGUAGE_LIST, detectBrowserLocation, getDefaultLocationCurrency } from '../services/languages';

import { login } from './user';
import { getProduct } from './products';
import { getSubscription } from './subscriptions';
import { trackLocation, switchDisplayCurrency, switchLanguage, openCart } from './views';

//Action Types
export const UPDATE_CART_REQUEST = 'cart/update_cart_request';
export const UPDATE_CART_SUCCESS = 'cart/update_cart_success';
export const FETCH_CART_REQUEST = 'cart/fetch_cart_request';
export const FETCH_CART_SUCCESS = 'cart/fetch_cart_success';
export const FETCH_CART_FAILURE = 'cart/fetch_cart_failure';
export const FETCH_CARTMETA_REQUEST = 'cart/fetch_cartmeta_request'
export const FETCH_CARTMETA_SUCCESS = 'cart/fetch_cartmeta_success'
export const CLEAR_CART_SUCCESS = 'cart/clear_cart_success';
export const PROMO_CART_FAILURE = 'cart/promo_cart_failure';
export const INITIALIZE_CART_SUCCESS = 'cart/initialize_cart_success';

//Action Creators
export const initializeCart = ({cart}) => async (dispatch) => {
    let switchedLanguage;
    dispatch(trackLocation(await detectBrowserLocation()));
    if (cart && cart.items.length > 0) {
        dispatch(switchDisplayCurrency(cart.currency));
    } else {
        dispatch(switchDisplayCurrency(await getDefaultLocationCurrency()));
    }
    dispatch(login());
    const initialBrowserLang = i18n.language;
    if (LANGUAGE_LIST.includes(initialBrowserLang)) {
        switchedLanguage = initialBrowserLang;
    } else if (LANGUAGE_LIST.includes(initialBrowserLang.substr(0,2))) {
        switchedLanguage = initialBrowserLang.substr(0,2);
    } else {
        switchedLanguage = "en";
    }
    dispatch(switchLanguage(switchedLanguage));
    dispatch({ type: INITIALIZE_CART_SUCCESS });
}

export const updatingCart = (id) => (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST, payload: id });
}

export const updateCart = (item) => (dispatch) => {
    dispatch(fetchCartItems(item, true));
}

export const fetchCartItems = (newItem=null) => (dispatch) => {
    dispatch({ type: FETCH_CART_REQUEST });
    try {
        const newCart = window.Snipcart.store.getState().cart.items;
        newItem && openCart();
        dispatch({ type: FETCH_CART_SUCCESS, payload: newCart.items });
    } catch(err) {
        console.log(err);
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
    dispatch({ type: UPDATE_CART_SUCCESS });
}

export const clearCart = () => (dispatch) => {
    dispatch({ type: CLEAR_CART_SUCCESS })
}

const byIdDefault = {};
//Reducers
const byId = (state = byIdDefault, action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
            return {
                ...action.payload.reduce((obj, product) => {
                  const previous = obj[product.id];
                  obj[product.id] = {
                    id: product.id,
                    name: product.name,
                    unitPrice: product.unitPrice,
                    isRecurring: product.isRecurring,
                    quantity: !previous ? product.quantity : product.quantity + previous.quantity,
                    price: !previous ? product.price : product.price + previous.price,
                    totalPrice: !previous ? product.totalPrice : product.totalPrice + previous.totalPrice,
                    totalPriceWithoutDiscountsAndTaxes: !previous ? product.totalPriceWithoutDiscountsAndTaxes : product.totalPriceWithoutDiscountsAndTaxes + previous.totalPriceWithoutDiscountsAndTaxes,
                  }
                  return obj
                }, {}),
            }
        case CLEAR_CART_SUCCESS:
                return byIdDefault
        default:
            return state
    }
}

const allIdsDefault = [];
const allIds = (state = allIdsDefault, action) => {
    switch (action.type) {
        case FETCH_CART_SUCCESS:
            return [...new Set(action.payload.map(product => product.id))]
        case CLEAR_CART_SUCCESS:
            return allIdsDefault
        default:
            return state
    }
}

export default combineReducers({
    byId,
    allIds,
})

//Selectors
export const getCartItem = (state, id) => state.cart.byId[id];

export const getCartItems = (state) => state.cart.allIds;

export const getCartItemToAdd = (state, id) => {
  return getProduct(state, id) || getSubscription(state, id);
}

export const getCartQuantity = (state) => {
  const items = getCartItems(state);
  if (items && items.length > 0) {
      return items.reduce((sum, id) => sum + getCartItem(state, id)['quantity'], 0)
  }
}

export const getCartTotal = (state) => {
  const items = getCartItems(state);
  if (items && items.length > 0) {
      return items.reduce((sum, id) => sum + getCartItem(state, id)['totalPrice'], 0)
  }
}
