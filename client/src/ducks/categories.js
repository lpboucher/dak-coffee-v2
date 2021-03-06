import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_CATEGORIES_REQUEST = 'collections/fetch_categories_request';
export const FETCH_CATEGORIES_SUCCESS = 'collections/fetch_categories_success';
export const FETCH_CATEGORIES_FAILURE = 'collections/fetch_categories_failure';

//Action Creators
export const fetchCategories = () => async dispatch => {
    //dispatch({ type: FETCH_CATEGORIES_REQUEST });
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/categories`);
        dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
    }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, category) => {
            obj[category.id] = category
            return obj
        }, {})
    }
    default:
        return state
    }
}

const allIds = (state = [], action) => {
    switch (action.type) {
      case FETCH_CATEGORIES_SUCCESS:
        return action.payload.map(category => category.id);
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getCategory = (state, id) => state.categories.byId[id];

export const getCategories = (state) => state.categories.allIds;

export const getAllCategories = (state) => state.categories.allIds.map(id => getCategory(state, id));

export const getCategoriesWithProducts = (state) => {
  const allCategories = getAllCategories(state);
  return allCategories.filter(category => category.products.length > 0);
}

export const getProductCategories = (state, productId) => {
  const allCategories = getAllCategories(state);
  if (allCategories) {
    const categoriesWithProduct = allCategories.filter(cat => cat.products.includes(productId));
    return categoriesWithProduct.map(cat => cat.slug);
  }
}

export const getSortedCategories = (state) => {
    return state.categories.allIds.sort((a, b) => {
        if ( getCategory(state, a).order < getCategory(state, b).order) {
            return -1;
        }
        if ( getCategory(state, a).order > getCategory(state, b).order) {
            return 1;
        }
        return 0;
    })
}
