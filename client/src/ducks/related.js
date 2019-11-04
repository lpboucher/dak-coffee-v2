import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_RELATED_REQUEST = 'related/fetch_related_request';
export const FETCH_RELATED_SUCCESS = 'related/fetch_related_success';
export const FETCH_RELATED_FAILURE = 'related/fetch_related_failure';

//Action Creators
export const fetchRelated = () => async dispatch => {
    //dispatch({ type: FETCH_COLLECTIONS_REQUEST });
    try {
        const res = await axios.get(`/relateds`);
        dispatch({ type: FETCH_RELATED_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
    }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
    case FETCH_RELATED_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, related) => {
            obj[related.id] = related
            return obj
        }, {})
    }
    default:
        return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
      case FETCH_RELATED_SUCCESS:
        return action.payload.map(related => related.id)
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getRelated = (state, id) => state.related.byId[id];

export const getRelateds = (state) => state.related.allIds;

export const getRelatedBySlug = (state, slug) => {
    const relatedId = state.related.allIds.find(id => state.related.byId[id].slug === slug);
    return getRelated(state, relatedId);
}