import { combineReducers } from 'redux';
import axios from 'axios';

import { getCollectionBySlug } from './collections';

//Action Types
export const FETCH_PRODUCTS_REQUEST = 'products/fetch_products_request';
export const FETCH_PRODUCTS_SUCCESS = 'products/fetch_products_success';
export const FETCH_PRODUCTS_FAILURE = 'products/fetch_products_failure';

//Action Creators
export const fetchProducts = () => async dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/productsinventory`);
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data.products, count: res.data.count });
    } catch(err) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: {global: "error.products.fetch"}});
    }
};

// new
export const fetchAllProducts = () => async dispatch => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/productsinventory`);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data.products, count: res.data.count });
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
        default:
            return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
        return action.payload.map(product => product.id)
        default:
        return state
    }
}

const total = (state = 0, action) => {
  switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
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
export const getProduct = (state, id) => state.products.byId[id];

export const getProductFeature = (state, id) => {
  const product = getProduct(state, id);
  if (product) return {
    name: product.name,
    thumb_image: product.thumb_image,
    stock: product.stock,
    slug: product.slug
  }
}

export const getProducts = (state) => state.products.allIds;

export const getProductsByCollection = (state, slug) => {
    const collection = getCollectionBySlug(state, slug);
    if(collection) {
        return collection.products.map(product => product.id);
    }
}

export const getProductIDBySlug = (state, slug) => state.products.allIds.find(id => state.products.byId[id].slug === slug);

export const getProductBySlug = (state, slug) => {
    const productId = getProductIDBySlug(state, slug);
    if (productId) { return getProduct(state, productId) }
}

export const getAllProducts = (state) => state.products.allIds.map(id => getProduct(state, id));
