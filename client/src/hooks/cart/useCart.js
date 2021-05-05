import { useSelector } from 'react-redux';

import {
  getCartQuantity,
  getCartTotal,
  getCartItemToAdd
} from '../../ducks/cart';

import {
  isAdding,
  isCartLoaded,
  openCart,
} from '../../ducks/views';

import {
  getDisplayedProductTitle,
  getDisplayedProductDescription,
  getPriceInCurrency
} from '../../services/productDisplayService';

import {
  getCartProductPrice,
  getCartProductOptions
} from '../../services/productDataService';

import { useCurrency } from '../global/useCurrency';

export const useCart = (id = null) => {

  const open = () => openCart();

  const isLoaded = useSelector(state => isCartLoaded(state));
  const { adding, productId } = useSelector(state => isAdding(state));
  const quantity = useSelector(state => getCartQuantity(state));
  const total = useSelector(state => getCartTotal(state));

  let productAdding;
  if (id != null) {
    productAdding = adding && productId === id
  }

  return {
    isLoaded,
    open,
    quantity,
    total,
    adding,
    productAdding
  }
}

export const useAddProductToCart = (productId, selected=null) => {
  const { currency } = useCurrency();
  const productToAdd = useSelector(state => getCartItemToAdd(state, productId));

  if (productToAdd) {
    const priceInCurrency = getPriceInCurrency(productToAdd.price, currency);
    var priceString = getCartProductPrice(productToAdd.price);
    var { title } = getDisplayedProductTitle(productToAdd);
    var translatedDescription = getDisplayedProductDescription(productToAdd.type, productToAdd.slug);
    var cartOptions = getCartProductOptions(priceString, priceInCurrency, productToAdd.type, selected);
    var thumbnail = productToAdd.images.thumb;
  }

  return {
    ...productToAdd,
    priceStr: priceString,
    description: translatedDescription,
    name: title,
    cartOptions,
    thumbnail,
  }
}
