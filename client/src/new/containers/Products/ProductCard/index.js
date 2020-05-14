import React from 'react';
import { useSelector } from 'react-redux';
import { getProduct } from '../../../../ducks/products';
import { getDisplayCurrency } from '../../../../ducks/views';

import ProductCard from '../../../components/Products/ProductCard';

const ProductCardContainer = ({productId}) => {
    const product = useSelector(state => getProduct(state, productId));
    const currency = useSelector(state => getDisplayCurrency(state));

    return (
       <ProductCard {...product} />
    )
}

export default ProductCardContainer;
