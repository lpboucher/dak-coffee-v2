import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

import {
  fetchProducts,
  getProductsFromTypes,
  getProduct,
  getSortedProducts,
  getFilteredProducts,
  getProducts,
  getProductBySlug
} from '../../../ducks/products';

import {
  fetchRelated,
  getRelatedBySlug,
  getRelateds,
} from '../../../ducks/related';

import { useCurrency } from '../global/useCurrency';

import {
  getDisplayedProductTitle,
  getDisplayedProductPrice,
  getStaticProductPrice,
  getDisplayedProductDescription,
  getPriceIncrements,
  getMedallion
} from '../../services/productDisplayService';

export const useProductsWithLimit = (limit = null) => {
  const [count, setCount] = useState(limit);
  const dispatch = useDispatch();

  const sortedProductsIds = useSelector(state => getSortedProducts(state));

  const productsLength = sortedProductsIds.length;

  useEffect(() => {
    if (sortedProductsIds && productsLength < 1) {
      dispatch(fetchProducts());
    }
  }, []);

  const upperLimit = limit == null ? productsLength : count;

  const showMore = () => setCount(Math.min(count+limit));

  return {
    sortedProductsIds: sortedProductsIds.slice(0, upperLimit),
    productCount: productsLength,
    activeCount: count,
    showMore,
  }
}

export const useFilteredProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => getProducts(state));
  const productIds = useSelector(state => getFilteredProducts(state, true));

  useEffect(() => {
    if (products && products.length < 1) {
      dispatch(fetchProducts());
    }
  }, []);

  return {
    productIds,
  }
}

export const useProductsByTypes = (productTypes = []) => {
  const dispatch = useDispatch();

  const productIds = useSelector(state => getProductsFromTypes(state, productTypes));

  useEffect(() => {
    if (productIds && productIds.length < 1) {
      dispatch(fetchProducts());
    }
  }, []);

  return {
    productIds,
  }
}

export const useSingleProduct = (productId=null, slug=null) => {
  const dispatch = useDispatch();
  const { currency } = useCurrency();
  const products = useSelector(state => getProducts(state));
  const product = useSelector(state => slug ? getProductBySlug(state, slug) : getProduct(state, productId));

  useEffect(() => {
    if (products && products.length < 1) {
      dispatch(fetchProducts());
    }
  }, []);

  if (product && product.price) {
    const priceInCurrency = product.price[currency.toLowerCase()];
    var { title, subtitle, helper } = getDisplayedProductTitle(product.type, product.slug);
    var description = getDisplayedProductDescription(product.type, product.slug);
    var formattedPrice = getDisplayedProductPrice(priceInCurrency);
    var staticPrice = getStaticProductPrice(product.type, priceInCurrency);
    var cartPrice = product.type !== "equipment" ? getPriceIncrements(priceInCurrency) : priceInCurrency.value;
    var medallion = getMedallion(product.type);
  }

  return {
    ...product,
    medallion,
    displayedTitle: title,
    displayedDescription: description,
    displayedSubtitle: subtitle,
    displayedHelper: helper,
    displayedPrice: formattedPrice,
    staticPrice: staticPrice,
    cartPrice: cartPrice
  }
}

export const useRelatedProducts = (slug) => {
  const dispatch = useDispatch();

  const relatedIds = useSelector(state => getRelateds(state));
  const related = useSelector(state => getRelatedBySlug(state, slug));

  useEffect(() => {
    if (relatedIds && relatedIds.length < 1) {
      dispatch(fetchRelated());
    }
  }, []);

  return {
    relatedProductIds: related ? related.products.map(product => product.id) : null
  }
}
