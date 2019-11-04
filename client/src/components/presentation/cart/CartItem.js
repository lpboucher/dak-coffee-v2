import React from 'react';

import CartItemLayout from '../../layouts/CartItemLayout';
import RemoveFromCart from '../../utils/RemoveFromCart';
import QuantitySelector from '../../utils/QuantitySelector';

import { Text, Image } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

const CartItem = ({id, removeFromCart, image, name, price, total, currency, updateCartItem, quantity}) => {
    const displayCurr = currency.toLowerCase()
    const imageSRC = buildImageUrl(`/Products/Thumbs/${image}`, 'product_cart');
    return (
        <CartItemLayout>
            <RemoveFromCart id={id} remove={removeFromCart} />
            <Image fit="contain" src={imageSRC} alt={name}/>
            <Text>{name}</Text>
            <Text>{`${price[displayCurr].symbol}${price.unit.toFixed(2)}`}</Text>
            <QuantitySelector id={id} update={updateCartItem} quantity={quantity} />
            <Text>{`${price[displayCurr].symbol}${total.toFixed(2)}`}</Text>
        </CartItemLayout>
    );
};

export default CartItem;