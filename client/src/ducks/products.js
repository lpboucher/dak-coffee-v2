import { combineReducers } from 'redux';
import axios from 'axios';

import { sortProductsByCoffeeAndSubscriptions, sortCategories } from '../services/productDisplayService';

import { getCollectionBySlug } from './collections';
import { getAllCategories } from './categories';
import { getActiveFilters } from './views';
import { getSimilar } from './similar';
import { getSubscriptions } from './subscriptions';

import { FETCH_SUBSCRIPTION_SUCCESS, FETCH_SUBSCRIPTIONS_SUCCESS } from './subscriptions';

//Action Types
export const FETCH_PRODUCTS_REQUEST = 'products/fetch_products_request';
export const FETCH_PRODUCTS_SUCCESS = 'products/fetch_products_success';
export const FETCH_PRODUCTS_FAILURE = 'products/fetch_products_failure';
export const FETCH_PRODUCT_SUCCESS = 'products/fetch_product_success';

//Action Creators
export const fetchCoffees = () => async dispatch => {
  const type = "coffees"
  let path = `/${type}`;
  let query = "?isActive=true";
  dispatch(fetchSome(`${path}${query}`, type));
};

export const fetchAll = () => async dispatch => {
  const type = "all"
  let path = `/products/${type}`;
  let query = "?isActive=true";
  dispatch(fetchSome(`${path}${query}`, "products"));
};

export const fetchSome = (path, type) => async dispatch => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}${path}`);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data[type], dataType: [type] });
      dispatch({ type: FETCH_SUBSCRIPTIONS_SUCCESS, payload: Array.isArray(res.data.subscriptions) ? res.data.subscriptions : [res.data.subscriptions] });
  } catch(err) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: {global: "error.products.fetch"}});
  }
};

export const fetchOne = (id, path) => async dispatch => {
  const idPath = `${path}/${id}`;
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}${idPath}`);
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data.product });
      if (res.data.subscription != null) {
        dispatch({ type: FETCH_SUBSCRIPTION_SUCCESS, payload: res.data.subscription });
      }
  } catch(err) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: {global: "error.products.fetch"}});
  }
};

export const fetchOneById = (id) => async dispatch => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/products/${id}`);
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data.product });
      if (res.data.subscription != null) {
        dispatch({ type: FETCH_SUBSCRIPTION_SUCCESS, payload: res.data.subscription });
      }
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
        return [...new Set([ ...state, action.payload.id ])]
        default:
        return state
    }
}

export default combineReducers({
    byId,
    allIds,
})

//Selectors
// input selectors only select state data
export const getProduct = (state, id) => state.products.byId[id] || null;

export const getProducts = (state) => state.products.allIds;

export const getAllProducts = (state) => state.products.allIds.map(id => getProduct(state, id));

// selectors that modify their data should use reselect, createselector

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
  const products = getAllSortedProducts(state);
  if (products) {
    return products.map(product => {
      return product.type === "subscription" ? [product.id, product.id] : product.id;
    }).flat();
  }
}

export const getSortedProductsFromCollection = (state, collection) => {
  const subscriptions = getSubscriptions(state);
  const foundCollection = getCollectionBySlug(state, collection);
  if (foundCollection) {
    return foundCollection.products.map(product =>
      subscriptions.includes(product) ?
        [{id: product, selected: "espresso-coffee"}, {id: product, selected: "filter-coffee"}]
        :
        {id: product}
    ).flat();
  }
}

export const getAllSortedProducts = (state) => {
  const products = getAllProducts(state);
  if (products) {
    return sortProductsByCoffeeAndSubscriptions(products);
  }
}

export const getFilteredProductsByCategories = (state) => {
  const categories = getAllCategories(state);
  const filters = getActiveFilters(state, "products");

  if (categories) {
    if (filters.length < 1) return sortCategories(categories);

    const filteredCategoryProducts = categories.filter(category => {
      return filters.includes(category.slug)
    });

    return sortCategories(filteredCategoryProducts);
  }
}

export const getProductsFromSimilar = (state, slug) => {
  const foundSimilar = getSimilar(state, slug);
  if (foundSimilar) {
    return foundSimilar.products;
  }
}

