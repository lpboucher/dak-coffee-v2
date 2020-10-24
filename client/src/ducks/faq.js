import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_FAQ_REQUEST = 'terms/fetch_faq_request';
export const FETCH_FAQ_SUCCESS = 'terms/fetch_faq_success';
export const FETCH_FAQ_FAILURE = 'terms/fetch_faq_failure';

//Action Creators
export const fetchFAQs = () => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/faqs`);
        dispatch({ type: FETCH_FAQ_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_FAQ_FAILURE, payload: {global: "error.articles.fetch"} });
    }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
  case FETCH_FAQ_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, faq) => {
            obj[faq.id] = faq;
            return obj
        }, {})
    }
    default:
        return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
      case FETCH_FAQ_SUCCESS:
        return action.payload.map(faq => faq.id)
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getFAQ = (state, id) => state.faqs.byId[id];

export const getAllFAQs = (state) => state.faqs.allIds.map(id => getFAQ(state, id));

export const getFAQGroups = (state) => {
  const faqs = getAllFAQs(state);
  if (faqs) {
    return faqs.reduce((obj, faq) => {
      if (Array.isArray(obj[faq.group])) {
        obj[faq.group] = [faq, ...obj[faq.group]];
      } else {
        obj[faq.group] = [faq]
      }
      return obj
    }, {})
  }
}
