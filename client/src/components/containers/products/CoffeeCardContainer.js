import React from 'react';
import { useSelector } from 'react-redux';
import { getProduct } from '../../../ducks/products';
import { getDisplayCurrency } from '../../../ducks/views';

import CoffeeCard from '../../presentation/products/CoffeeCard';

const CoffeeCardContainer = ({id}) => {
    const product = useSelector(state => getProduct(state, id));
    const currency = useSelector(state => getDisplayCurrency(state));

    return (
        <>
        {product && product.price &&
            <CoffeeCard currency={currency} {...product}/>
        }
        </>
    )
}

export default CoffeeCardContainer;