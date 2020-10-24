import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_ARTICLES_REQUEST = 'articles/fetch_articles_request';
export const FETCH_ARTICLES_SUCCESS = 'articles/fetch_articles_success';
export const FETCH_ARTICLES_FAILURE = 'articles/fetch_articles_failure';

//Action Creators
export const fetchArticles = () => async dispatch => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/articles`);
        dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_ARTICLES_FAILURE, payload: {global: "error.articles.fetch"} });
    }
};

export const fetchOneArticle = (slug) => async dispatch => {
  try {
      const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/articles/${slug}`);
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: [res.data] });
  } catch(err) {
      dispatch({ type: FETCH_ARTICLES_FAILURE, payload: {global: "error.articles.fetch"} });
  }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, article) => {
            obj[article.id] = {
                content: {en: article.content_en, fr: article.content_fr, nl: article.content_nl},
                title: {en: article.title_en, fr: article.title_fr, nl: article.title_nl},
                thumb: article.thumbnail,
                main: article.main_img,
                id: article.id,
                slug: article.slug,
                keywords: article.keywords
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
      case FETCH_ARTICLES_SUCCESS:
        return action.payload.map(article => article.id)
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getArticle = (state, id) => state.articles.byId[id];

export const getArticles = (state) => state.articles.allIds;

export const getArticleBySlug = (state, slug) => {
    const Id = state.articles.allIds.find(id => state.articles.byId[id].slug === slug);
    if (Id) {
        return getArticle(state, Id);
    }
}
