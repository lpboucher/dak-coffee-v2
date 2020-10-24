import { combineReducers } from 'redux';
import { detectBrowserLocation, getDefaultLocationCurrency } from '../components/utils/Languages/detectLanguage';
import { notify } from '../new/services/notifications';

import { login } from './user';
import { getProduct } from './products';
import { getSubscription } from './subscriptions';
import { trackLocation, switchDisplayCurrency, switchLanguage } from './views';

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
        //newItem && toast.success(`added ${newItem.name} to cart`)
        newItem && notify.cart.add(newItem);
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

export const getCartItemToAdd = (state, id) => {
  return getProduct(state, id) || getSubscription(state, id);
}

export const getProductFromCartItem = (state, id) => {
  const cartItem = getCartItem(state, id);
  let product;
  if (cartItem && !cartItem.isRecurring) {
      product = getProduct(state, cartItem.id);
  } else if (cartItem && cartItem.isRecurring) {
      product = getSubscription(state, cartItem.id);
  }
  if (product) {
      return {
          id: cartItem.id,
          name: product.name,
          price: product.price.map(onePrice => ({...onePrice, unit: cartItem.unitPrice})),
          total: cartItem.totalPrice,
          quantity: cartItem.quantity,
          image: product.images.thumb
      }
  }
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
