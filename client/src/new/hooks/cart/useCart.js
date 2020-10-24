import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react"

import {
  fetchOneById
} from '../../../ducks/products';

import {
  getCartQuantity,
  getCartTotal,
  getCartItems,
  getProductFromCartItem,
  getCartItemToAdd
} from '../../../ducks/cart';

import {
  isAdding,
  isCartLoaded,
  isCartOpen,
  openCartSummary,
  closeCartSummary
} from '../../../ducks/views';

import {
  getDisplayedProductTitle,
  getDisplayedProductDescription,
  getDisplayedProductPrice,
  getPriceInCurrency
} from '../../services/productDisplayService';

import {
  getCartProductPrice,
  getCartProductOptions
} from '../../services/productDataService';

import { useCurrency } from '../global/useCurrency';

export const useCart = (id = null) => {
  const dispatch = useDispatch();

  const open = () => dispatch(openCartSummary());
  const close = () => dispatch(closeCartSummary());

  const isLoaded = useSelector(state => isCartLoaded(state));
  const { adding, productId } = useSelector(state => isAdding(state));
  const quantity = useSelector(state => getCartQuantity(state));
  const total = useSelector(state => getCartTotal(state));
  const isOpen = useSelector(state => isCartOpen(state));

  let productAdding;
  if (id != null) {
    productAdding = adding && productId === id
  }

  return {
    isLoaded,
    open,
    close,
    isOpen,
    quantity,
    total,
    adding,
    productAdding
  }
}

export const useSingleCartItem = (itemId) => {
  const { currency, toCurrency } = useCurrency();
  const dispatch = useDispatch();
  const productItem = useSelector(state => getProductFromCartItem(state, itemId));

  if (productItem && productItem.price) {
    const priceInCurrency = getPriceInCurrency(productItem.price, currency);
    var { title } = getDisplayedProductTitle(productItem);
    var productPrice = getDisplayedProductPrice(priceInCurrency.base);
    var totalPrice = toCurrency(productItem.total);
  }

  useEffect(() => {
    if (!productItem) {
      dispatch(fetchOneById(itemId));
    }
  }, []);

  return {
    ...productItem,
    name: title,
    productPrice,
    totalPrice
  }
}

export const useCartItems = () => {
  const cartItemIds = useSelector(state => getCartItems(state));

  return {
    cartItemIds
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
    var cartOptions = getCartProductOptions(priceInCurrency, productToAdd.type, selected);
  }

  return {
    ...productToAdd,
    priceStr: priceString,
    description: translatedDescription,
    name: title,
    cartOptions,
  }
}
