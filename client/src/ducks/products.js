import { combineReducers } from 'redux';
import axios from 'axios';

import { getCollectionBySlug } from './collections';
/*import { getCategoryBySlug } from './categories';
import { getThumbnailByProductId, getSecondaryImgByProductId } from './thumbnails';
import { getOrderItems } from './checkout';
import { getProductStock } from './inventories';*/

//Action Types
export const FETCH_PRODUCTS_REQUEST = 'products/fetch_products_request';
export const FETCH_PRODUCTS_SUCCESS = 'products/fetch_products_success';
export const FETCH_PRODUCTS_FAILURE = 'products/fetch_products_failure';
export const FETCH_INVENTORY_REQUEST = 'products/fetch_inventory_request';
export const FETCH_INVENTORY_SUCCESS = 'products/fetch_inventory_success';
export const FETCH_INVENTORY_FAILURE = 'products/fetch_inventory_failure';

//Action Creators
export const fetchProducts = () => async dispatch => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
        const res = await axios.get(`/products`);
        await dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_PRODUCTS_FAILURE});
    }
    dispatch(fetchProductInventory())
};

export const fetchProductInventory = () => async dispatch => {
    dispatch({ type: FETCH_INVENTORY_REQUEST });
    try {
        const res = await axios.get(`/inventory`);
        dispatch({ type: FETCH_INVENTORY_SUCCESS, payload: res.data });
    } catch(err) {
        dispatch({ type: FETCH_INVENTORY_FAILURE});
    }
}

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
        case FETCH_INVENTORY_SUCCESS:
            return {
                ...state,
                ...action.payload.reduce((obj, product) => {
                    obj[product.id] = {
                        ...state[product.id],
                        ...product
                    }
                    return obj
                }, {}),
            }
        default:
            return state
    }
}
    
const allIds = (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
        return action.payload.map(product => product.id)
        default:
        return state
    }
}

export default combineReducers({
    byId,
    allIds,
})

//Selectors
export const getProduct = (state, id) => state.products.byId[id];

export const getProducts = (state) => state.products.allIds;

export const getProductsByCollection = (state, slug) => {
    const collection = getCollectionBySlug(state, slug);
    if(collection) {
        return collection.products.map(product => product.id);
    }
}

export const getProductIDBySlug = (state, slug) => state.products.allIds.find(id => state.products.byId[id].slug === slug);

export const getProductBySlug = (state, slug) => {
    const productId = getProductIDBySlug(state, slug);
    if (productId) { return getProduct(state, productId) }
}

//export const getProducts = (state, ids) => ids.map(id => getProduct(state, id));

/*
export const getProductBySlug = (state, slug) => {
    const productId = getProductIDBySlug(state, slug);
    if (productId) {
        return {
            ...getProduct(state, productId),
            thumb: {...getThumbnailByProductId(state, productId)},
            secondary: {...getSecondaryImgByProductId(state, productId)}
        }
    }
}*/

export const getAllProducts = (state) => state.products.allIds.map(id => getProduct(state, id));

/*export const getProductsByIds = (state) => state.products.byId;

export const getProductsByCollection = (state, slug) => {
    const featured = getCollectionBySlug(state, slug);
    if(featured) {
        return featured.relationships.products.data.map(product => {
            return {
                product: {
                    ...getProduct(state, product.id),
                    stock: {...getProductStock(state, product.id)}
                },
                thumb: {...getThumbnailByProductId(state, product.id)}
            }
        });
    }
}

export const getProductsByCategory = (state, slug) => {
    const category = getCategoryBySlug(state, slug);
    if(category) {
        return category.relationships.products.data.map(product => {
            return {
                product: {
                    ...getProduct(state, product.id),
                    stock: {...getProductStock(state, product.id)}
                },
                thumb: {...getThumbnailByProductId(state, product.id)}
            }
        });
    }
}

export const getSubscriptionProducts = (state) => {
    const items = getOrderItems(state);
    if (items) {
        const withQuantity = items.map(sub => ({quantity: sub.quantity, ...getProduct(state, sub.product_id)}))
        //const subs = items.filter(item => getProduct(state, item.product_id)['recurring'] === true)
        //return subs.map(sub => getProduct(state, sub.product_id));
        return withQuantity.filter(item => item.recurring === true)
    }
}

export const getPlanIDBySlug = (state, slug) => {
    const productId = getProductIDBySlug(state, slug);
    if (productId) {
        return getProduct(state, productId)['stripe_plan_id']
    }
}

export const getOrderProducts = (state, ids) => {
    const productIds = ids.map(id => state.user.orders.items[id].product_id);
    return productIds.map(id => getProduct(state, id));
}*/