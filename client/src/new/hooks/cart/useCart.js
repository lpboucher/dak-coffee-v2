import { useSelector, useDispatch } from 'react-redux';

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
  const productItem = useSelector(state => getProductFromCartItem(state, itemId));

  return {
    ...productItem
  }
}

export const useCartItems = () => {
  const cartItemIds = useSelector(state => getCartItems(state));

  return {
    cartItemIds
  }
}

export const useAddProductToCart = (productId) => {
  const productToAdd = useSelector(state => getCartItemToAdd(state, productId));

  return {
    ...productToAdd
  }
}
