import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"

import {
  fetchOne,
  fetchAll,
  getProduct,
  getSortedProductsFromCollection,
  getFilteredProductsByCategories,
  getProductBySlug,
  getProductsFromSimilar,
} from '../../../ducks/products';

import {
  fetchAllSimilar,
  getSimilars,
} from '../../../ducks/similar';

import {
  fetchOneCollection,
  fetchOneCollectionProducts,
  getCollectionBySlug
} from "../../../ducks/collections";

import { getCategories, fetchCategories, getProductCategories } from "../../../ducks/categories";

import {
  getAllFetched
} from "../../../ducks/views";

import { useCurrency } from '../global/useCurrency';

import {
  getPriceInCurrency,
  hasPricingOptions,
  getDisplayedProductTitle,
  getDisplayedProductPrice,
  getStaticProductPrice,
  getDisplayedProductDescription,
  getPriceIncrements,
  getProductOptions,
  getMedallion,
  getCoffeeCharacteristics,
  getLongProductDescription,
  getTastingNotesWithMedallion,
  getTranslatedItem
} from '../../services/productDisplayService';

export const useCompilationProductsWithLimit = (compilation, limit = null) => {
  const [count, setCount] = useState(limit);
  const dispatch = useDispatch();

  const collection = useSelector(state => getCollectionBySlug(state, compilation));
  const categories = useSelector(state => getCategories(state));
  let allSortedProductsIds = useSelector(state => getSortedProductsFromCollection(state, compilation));

  useEffect(() => {
    if (!collection) {
      dispatch(fetchOneCollection(compilation));
    }
  }, []);

  useEffect(() => {
    if (!allSortedProductsIds || (allSortedProductsIds && allSortedProductsIds.length < 1)) {
      dispatch(fetchOneCollectionProducts(compilation));
    }
  }, []);

  useEffect(() => {
    if (categories && categories.length < 1) {
      dispatch(fetchCategories());
    }
  }, []);

  if (allSortedProductsIds) {
    var upperLimit = limit == null ? allSortedProductsIds.length : count;
    var showMore = () => setCount(Math.min(count+limit));
    var sortedProductsIds = allSortedProductsIds.slice(0, upperLimit);
  }

  return {
    sortedProductsIds,
    productCount: allSortedProductsIds ? allSortedProductsIds.length : 0,
    activeCount: count,
    showMore,
  }
}

export const useFilteredProducts = () => {
  const dispatch = useDispatch();
  const fetched = useSelector(state => getAllFetched(state));
  const productCategories = useSelector(state => getFilteredProductsByCategories(state));

  let categoryProducts = [];

  useEffect(() => {
    const needToFetch = !fetched.includes("products") || !(fetched.includes("coffees") && fetched.includes("merchandises") && fetched.includes("equipment"))
    if (needToFetch) {
      // dispatch(fetchProducts());
      dispatch(fetchAll());
    }
  }, []);

  if (productCategories && productCategories.length > 0) {
    categoryProducts = productCategories.map(cat => {
      return {
        ...cat,
        displayName: getTranslatedItem(cat.display),
      }
    })
  }

  return {
    categoryProducts,
  }
}

export const useSingleProduct = (productId, selected) => {
  const { currency } = useCurrency();
  const product = useSelector(state => getProduct(state, productId));
  const categories = useSelector(state => getProductCategories(state, productId));

  if (product && product.price) {
    const priceInCurrency = getPriceInCurrency(product.price, currency);
    var hasPriceOptions = hasPricingOptions(product.type)
    var { title, subtitle, helper } = getDisplayedProductTitle(product, selected);
    var description = getDisplayedProductDescription(product.short);
    var longDescription = getLongProductDescription(product);
    var staticPrice = getStaticProductPrice(product.type, priceInCurrency.base);
    var characteristics = getCoffeeCharacteristics(product);
    var tastingNotes = getTastingNotesWithMedallion(product);
    var cartPrice = getPriceIncrements(product.type, priceInCurrency);
    var medallion = getMedallion(categories, selected);
    var additionalOptions = getProductOptions(product.type);
    var formattedPrice = getDisplayedProductPrice(priceInCurrency.base);
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
    cartPrice: cartPrice,
    tastingNotes,
    longDescription,
    hasPriceOptions,
    additionalOptions,
    characteristics,
    categories
  }
}

export const useSingleProductPage = (slug, model) => {
  const dispatch = useDispatch();
  const product = useSelector(state => getProductBySlug(state, slug));

  useEffect(() => {
    if (!product) {
      dispatch(fetchOne(slug, `/products/${model}`));
    }
  }, []);

  return {
    ...product,
  }
}

export const useSimilarProducts = (slug) => {
  const dispatch = useDispatch();

  const fetched = useSelector(state => getAllFetched(state));
  const similarIds = useSelector(state => getProductsFromSimilar(state, slug));
  const similars = useSelector(state => getSimilars(state));

  useEffect(() => {
    if (similars && similars.length < 1) {
      dispatch(fetchAllSimilar());
    }
  }, []);

  useEffect(() => {
    const needToFetch = !fetched.includes("products") || !(fetched.includes("coffees") && fetched.includes("merchandises") && fetched.includes("equipment"))
    if (needToFetch) {
      dispatch(fetchAll());
    }
  }, []);

  return {
    similarProductIds: similarIds
  }
}
