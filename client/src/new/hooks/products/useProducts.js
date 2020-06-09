import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"

import { fetchProducts, getProductsFromTypes, getProduct, getSortedProducts } from '../../../ducks/products';

export const useProducts = (productTypes = [], limit = null) => {
  const dispatch = useDispatch();

  const productIds = useSelector(state => getProductsFromTypes(state, productTypes));
  const sortedProductsIds = useSelector(state => getSortedProducts(state));

  const productsLength = productIds.length;

  useEffect(() => {
    if (productIds && productsLength < 1) {
      dispatch(fetchProducts());
    }
  }, []);

  const upperLimit = limit == null ? productsLength : limit;

  return {
    productIds: productIds.slice(0, upperLimit),
    sortedProductsIds: sortedProductsIds.slice(0, upperLimit),
    productCount: productsLength
  }
}

export const useSingleProduct = (productId) => {
  const product = useSelector(state => getProduct(state, productId));

  return {
    ...product
  }
}
