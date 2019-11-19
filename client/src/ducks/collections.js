import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_COLLECTIONS_REQUEST = 'collections/fetch_collections_request';
export const FETCH_COLLECTIONS_SUCCESS = 'collections/fetch_collections_success';
export const FETCH_COLLECTIONS_FAILURE = 'collections/fetch_collections_failure';

//Action Creators
export const fetchCollections = () => async dispatch => {
    //dispatch({ type: FETCH_COLLECTIONS_REQUEST });
    try {
        const res = await axios.get(`/api/groupings`);
        dispatch({ type: FETCH_COLLECTIONS_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
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
    default:
        return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
      case FETCH_COLLECTIONS_SUCCESS:
        return action.payload.map(collection => collection.id)
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