import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_SIMILAR_REQUEST = 'related/fetch_similar_request';
export const FETCH_SIMILAR_SUCCESS = 'related/fetch_similar_success';
export const FETCH_SIMILAR_FAILURE = 'related/fetch_similar_failure';

//Action Creators
export const fetchSimilar = (slug) => async dispatch => {
    //dispatch({ type: FETCH_COLLECTIONS_REQUEST });
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/similars/${slug}`);
        dispatch({ type: FETCH_SIMILAR_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
    }
};

export const fetchAllSimilar = () => async dispatch => {
  //dispatch({ type: FETCH_COLLECTIONS_REQUEST });
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/similars`);
      dispatch({ type: FETCH_SIMILAR_SUCCESS, payload: res.data });
  } catch(err) {
      //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
  }
};

//Reducers
const bySlug = (state = {}, action) => {
switch (action.type) {
    case FETCH_SIMILAR_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, similar) => {
            obj[similar.product_slug] = similar
            return obj
        }, {})
    }
    default:
        return state
    }
}

const allSlugs = (state = [], action) => {
    switch (action.type) {
      case FETCH_SIMILAR_SUCCESS:
        return action.payload.map(similar => similar.product_slug)
      default:
        return state
    }
  }

export default combineReducers({
    bySlug,
    allSlugs
})

//Selectors
export const getSimilar = (state, slug) => state.similar.bySlug[slug];

export const getSimilars = (state) => state.similar.allSlugs;
