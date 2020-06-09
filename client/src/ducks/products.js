import { combineReducers } from 'redux';
import axios from 'axios';

import { getCollectionBySlug } from './collections';

//Action Types
export const FETCH_PRODUCTS_REQUEST = 'products/fetch_products_request';
export const FETCH_PRODUCTS_SUCCESS = 'products/fetch_products_success';
export const FETCH_PRODUCTS_FAILURE = 'products/fetch_products_failure';
export const FETCH_PRODUCT_SUCCESS = 'products/fetch_product_success';

//Action Creators
export const fetchProducts = (query = []) => async dispatch => {
  let path = `/products`;
  if (query.length > 0) {
    path += `?${query.join("&")}`
  }
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}${path}`);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data.products, count: res.data.count });
  } catch(err) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: {global: "error.products.fetch"}});
  }
};

export const fetchOneProduct = (id) => async dispatch => {
  const path = `/products/${id}`;
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}${path}`);
      console.log(res);
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data.product, count: res.data.count });
  } catch(err) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: {global: "error.products.fetch"}});
  }
};

//Reducers
const byId = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
            ...action.payload.reduce((obj, product) => {
                obj[product.id] = product
                return obj
            }, {}),
        }
        case FETCH_PRODUCT_SUCCESS:
        return {
            ...state,
            [action.payload.id]: { ...action.payload }
        }
        default:
            return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
        return action.payload.map(product => product.id)
        case FETCH_PRODUCT_SUCCESS:
        return [ ...state, action.payload.id ]
        default:
        return state
    }
}

const total = (state = 0, action) => {
  switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
      case FETCH_PRODUCT_SUCCESS:
      return action.count || 0;
      default:
      return state
  }
}

export default combineReducers({
    byId,
    allIds,
    total,
})

//Selectors
//old
export const getProductsByCollection = (state, slug) => {
    const collection = getCollectionBySlug(state, slug);
    if(collection) {
        return collection.products.map(product => product.id);
    }
}

//new
export const getProduct = (state, id) => state.products.byId[id] || null;

export const getProducts = (state) => state.products.allIds;

export const getProductCount = (state) => state.products.total;

export const getAllProducts = (state) => state.products.allIds.map(id => getProduct(state, id));

export const getProductFeature = (state, id) => {
  const product = getProduct(state, id);
  if (product) return {
    name: product.name,
    thumb_image: product.thumb_image,
    stock: product.stock,
    slug: product.slug
  }
}

export const getProductIDBySlug = (state, slug) => state.products.allIds.find(id => state.products.byId[id].slug === slug);

export const getProductBySlug = (state, slug) => {
    const productId = getProductIDBySlug(state, slug);
    if (productId) { return getProduct(state, productId) }
}

export const getProductsFromTypes = (state, types) => {
  const products = state.products.allIds;
  if (types.length < 1) {
    return products;
  }
  return products.filter(id => {
      const product = getProduct(state, id);
      if (product && product.type) {
        return types.indexOf(product.type) !== -1;
      }
      return false;
  });
};

export const getSortedProducts = (state) => {
  const products = getAllProducts(state);
  if (products) {
    const sortedProducts = products.sort((a,b) => {
      return compareIsCoffee(a,b) || compareIsSubscription(a,b);
    });
    return sortedProducts.map(product => product.id);
  }
}

const compareIsCoffee = (a, b) => (a.type === 'coffee' ? 0 : 1) - (b.type === 'coffee' ? 0 : 1);

const compareIsSubscription = (a, b) => (a.type === 'subscription' ? 0 : 1) - (b.type === 'subscription' ? 0 : 1);

