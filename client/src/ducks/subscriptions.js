import { combineReducers } from 'redux';
import axios from 'axios';

//Action Types
export const FETCH_SUBSCRIPTION_SUCCESS = 'subscriptions/fetch_subscription_success';
export const FETCH_SUBSCRIPTIONS_REQUEST = 'subscriptions/fetch_subscriptions_request';
export const FETCH_SUBSCRIPTIONS_SUCCESS = 'subscriptions/fetch_subscriptions_success';
export const FETCH_SUBSCRIPTIONS_FAILURE = 'subscriptions/fetch_subscriptions_failure';

//Action Creators
export const fetchSubscriptions = () => async dispatch => {
    //dispatch({ type: FETCH_COLLECTIONS_REQUEST });
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_PREFIX}/subscriptions`);
        dispatch({ type: FETCH_SUBSCRIPTIONS_SUCCESS, payload: res.data });
    } catch(err) {
        //dispatch({ type: FETCH_COLLECTIONS_FAILURE});
    }
};

//Reducers
const byId = (state = {}, action) => {
switch (action.type) {
    case FETCH_SUBSCRIPTIONS_SUCCESS:
    return {
        ...state,
        ...action.payload.reduce((obj, subscription) => {
            obj[subscription.id] = {...subscription, type: 'subscription'}
            return obj
        }, {})
    }
    case FETCH_SUBSCRIPTION_SUCCESS:
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
      case FETCH_SUBSCRIPTIONS_SUCCESS:
        return action.payload.map(subscription => subscription.id)
      case FETCH_SUBSCRIPTION_SUCCESS:
        return [...new Set([ ...state, action.payload.id ])]
      default:
        return state
    }
  }

export default combineReducers({
    byId,
    allIds
})

//Selectors
export const getSubscription = (state, id) => state.subscriptions.byId[id];

export const getSubscriptions = (state) => state.subscriptions.allIds;
