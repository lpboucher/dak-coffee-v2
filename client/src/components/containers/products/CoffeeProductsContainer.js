import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollections, getCollections } from '../../../ducks/collections';
import { getProductsByCollection } from '../../../ducks/products';
import Skeleton from 'react-loading-skeleton';

import CoffeeRowLayout from '../../layouts/CoffeeRowLayout';

import Loader from '../../utils/SimpleLoader';

const CoffeeProductsContainer = ({collection}) => {
    const collections = useSelector(state => getCollections(state));
    const productIds = useSelector(state => getProductsByCollection(state, collection));

    const dispatch = useDispatch();

    useEffect(() => {
        if (collections && collections.length < 1) {
            dispatch(fetchCollections());
        }
    }, [collections, dispatch]);

    return (

        <>
            {productIds && productIds.length > 0 ?
                <CoffeeRowLayout coffees={productIds}/>
                :
                <Loader />
            }
        </>
    )
}

export default CoffeeProductsContainer;
