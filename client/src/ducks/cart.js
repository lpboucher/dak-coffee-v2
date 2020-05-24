import { combineReducers } from 'redux';
import { detectBrowserLocation, getDefaultLocationCurrency } from '../components/utils/Languages/detectLanguage';
import { toast } from 'react-toastify';

import { login } from './user';
import { getProduct } from './products';
import { getSubscription } from './subscriptions';
import { trackLocation, switchDisplayCurrency, switchLanguage, openCartSummary, closeCartSummary } from './views';

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
//new
export const initializeCart = ({order}) => async (dispatch) => {
  dispatch(trackLocation(await detectBrowserLocation()));
  if (order && order.items.length > 0) {
      dispatch(switchDisplayCurrency(order.currency));
  } else {
      dispatch(switchDisplayCurrency(await getDefaultLocationCurrency()));
  }
  dispatch(login());
  dispatch(switchLanguage());
  dispatch({ type: INITIALIZE_CART_SUCCESS });
}
//new
export const updatingCart = (id) => (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST, payload: id });
}
//new add, addtocart action
export const updateCart = (item) => (dispatch) => {
    dispatch(fetchCartItems(item, true));
}

export const updateCartItem = (id, options) => (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST });
    const { quantity } = options;
    try {
        if (quantity < 1) {dispatch(removeCartItem(id));}
        else {window.Snipcart.api.items.update(id, options)}
        setTimeout(() => dispatch(fetchCartItems()), 1000);
    } catch(err) {

    }
}

export const removeCartItem = (id) => (dispatch) => {
    dispatch({ type: UPDATE_CART_REQUEST });
    try {
        window.Snipcart.api.items.remove(id)
        setTimeout(() => dispatch(fetchCartItems()), 1000)
    } catch(err) {

    }
}

export const fetchCartItems = (newItem=null) => (dispatch) => {
    dispatch({ type: FETCH_CART_REQUEST });
    try {
        const newCart = window.Snipcart.api.items.all();
        newItem && toast.success(`added ${newItem.name} to cart`)
        dispatch({ type: FETCH_CART_SUCCESS, payload: newCart });
    } catch(err) {
        //dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
    dispatch({ type: UPDATE_CART_SUCCESS });
}

export const fetchCartMeta = () => (dispatch) => {
    dispatch({ type: FETCH_CARTMETA_REQUEST });
    try {
        const cartMeta = window.Snipcart.api.cart.get();
        dispatch({ type: FETCH_CARTMETA_SUCCESS, payload: cartMeta });
    } catch(err) {
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
                    obj[product.uniqueId] = {
                        id: product.uniqueId,
                        name: product.name,
                        quantity: product.quantity,
                        price: product.price,
                        unitPrice: product.unitPrice,
                        productId: product.id,
                        isRecurring: product.isRecurring,
                        totalPrice: product.totalPrice,
                        totalPriceWithoutDiscountsAndTaxes: product.totalPriceWithoutDiscountsAndTaxes
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
            return action.payload.map(product => product.uniqueId)
        case CLEAR_CART_SUCCESS:
            return allIdsDefault
        default:
            return state
    }
}

const metaDefault = {};
const meta = (state = metaDefault, action) => {
    switch (action.type) {
        case FETCH_CARTMETA_SUCCESS:
            return {
                ...state,
                shippingCharged: action.payload.shippingCharged,
                taxes: action.payload.taxesTotal,
            }
        case CLEAR_CART_SUCCESS:
                return metaDefault
        default:
            return state
    }
}

export default combineReducers({
    byId,
    allIds,
    meta
})

//Selectors
export const getCartItem = (state, id) => state.cart.byId[id];

export const getCartItems = (state) => state.cart.allIds;

export const getCartItemFromProducts = (state, id) => {
    const cartItem = getCartItem(state, id);
    let product;
    if (cartItem && !cartItem.isRecurring) {
        product = getProduct(state, cartItem.productId);
    } else if (cartItem && cartItem.isRecurring) {
        product = getSubscription(state, cartItem.productId);
    }
    if (product) {
        return {
            id: cartItem.productId,
            name: product.name,
            price: {
                unit: cartItem.unitPrice,
                ...product.price
            },
            total: cartItem.totalPrice,
            quantity: cartItem.quantity,
            image: product.thumb_image
        }
    }
}

//new
export const getCartQuantity = (state) => {
    const items = getCartItems(state);
    if (items && items.length > 0) {
        return items.reduce((sum, id) => sum + getCartItem(state, id)['quantity'], 0)
    }
}

//new
export const getCartTotal = (state) => {
    const items = getCartItems(state);
    if (items && items.length > 0) {
        return items.reduce((sum, id) => sum + getCartItem(state, id)['totalPrice'], 0)
    }
}

export const getCartSubTotal = (state) => {
    const items = getCartItems(state);
    if (items && items.length > 0) {
        return items.reduce((sum, id) => sum + getCartItem(state, id)['totalPriceWithoutDiscountsAndTaxes'], 0)
    }
}

export const getCartSummary = (state) => {
    return {
        total: getCartTotal(state),
        subTotal: getCartSubTotal(state)
    }
}

// new
export const getCartItemToAdd = (state, id) => {
  return getProduct(state, id) || getSubscription(state, id);
}
