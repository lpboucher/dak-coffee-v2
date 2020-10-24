import { combineReducers } from 'redux';
import axios from 'axios';

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from './products';

import { FETCH_SUBSCRIPTIONS_SUCCESS } from './subscriptions';

//Action Types
export const FETCH_COLLECTIONS_REQUEST = 'collections/fetch_collections_request';
export const FETCH_COLLECTIONS_SUCCESS = 'collections/fetch_collections_success';
export const FETCH_COLLECTIONS_FAILURE = 'collections/fetch_collections_failure';
export const FETCH_COLLECTION_REQUEST = 'collections/fetch_collection_request';
export const FETCH_COLLECTION_SUCCESS = 'collections/fetch_collection_success';
export const FETCH_COLLECTION_FAILURE = 'collections/fetch_collection_failure';

//Action Creators
export const fetchCollections = () => async dispatch => {
    dispatch({ type: FETCH_COLLECTIONS_REQUEST });
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/compilations`);
        dispatch({ type: FETCH_COLLECTIONS_SUCCESS, payload: res.data, dataType: "collections" });
    } catch(err) {
        //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
    }
};

export const fetchOneCollection = (collectionSlug) => async dispatch => {
  dispatch({ type: FETCH_COLLECTION_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/compilations/${collectionSlug}`);
      dispatch({ type: FETCH_COLLECTION_SUCCESS, payload: res.data });
  } catch(err) {
      //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
  }
};

export const fetchOneCollectionProducts = (collectionSlug) => async dispatch => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/compilations/${collectionSlug}/products`);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data.products, dataType: [`${collectionSlug}Products`] });
      dispatch({ type: FETCH_SUBSCRIPTIONS_SUCCESS, payload: res.data.subscriptions });
  } catch(err) {
      dispatch({ type: FETCH_PRODUCTS_FAILURE});
  }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
    case FETCH_COLLECTIONS_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, collection) => {
            obj[collection.id] = collection
            return obj
        }, {})
    }
    case FETCH_COLLECTION_SUCCESS:
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
      case FETCH_COLLECTIONS_SUCCESS:
        return action.payload.map(collection => collection.id)
      case FETCH_COLLECTION_SUCCESS:
        return [ ...state, action.payload.id ]
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getCollection = (state, id) => state.collections.byId[id];

export const getCollections = (state) => state.collections.allIds;

export const getCollectionBySlug = (state, slug) => {
    const collectionId = state.collections.allIds.find(id => state.collections.byId[id].slug === slug);
    return getCollection(state, collectionId);
}
