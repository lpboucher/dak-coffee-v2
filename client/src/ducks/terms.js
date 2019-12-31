import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_TERMS_REQUEST = 'terms/fetch_terms_request';
export const FETCH_TERMS_SUCCESS = 'terms/fetch_terms_success';
export const FETCH_TERMS_FAILURE = 'terms/fetch_terms_failure';

//Action Creators
export const fetchTerms = () => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/terms`);
        dispatch({ type: FETCH_TERMS_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_TERMS_FAILURE, payload: {global: "error.articles.fetch"} });
    }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
    case FETCH_TERMS_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, term) => {
            obj[term.id] = {
                content: term.content,
                title: term.title,
                slug: term.slug,
                id: term.id
            }
            return obj
        }, {})
    }
    default:
        return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
      case FETCH_TERMS_SUCCESS:
        return action.payload.map(term => term.id)
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getTerm = (state, id) => state.terms.byId[id];

export const getTerms = (state) => state.terms.allIds;

export const getTermBySlug = (state, slug) => {
    const Id = state.terms.allIds.find(id => state.terms.byId[id].slug === slug);
    if (Id) {
        return getTerm(state, Id);
    }
}