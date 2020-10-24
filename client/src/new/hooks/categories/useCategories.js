import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import {
  fetchCategories,
  getCategoriesWithProducts
} from '../../../ducks/categories';

import {
  getTranslatedItem
} from '../../services/productDisplayService';

export const useCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => getCategoriesWithProducts(state));

  useEffect(() => {
    if (categories && categories.length < 1) {
      dispatch(fetchCategories());
    }
  }, []);

  if (categories && categories.length > 0) {
    var categoryOptions = categories.map(cat => {
      return {
        name: getTranslatedItem(cat.display),
        slug: cat.slug
      }
    })
  }

  return {
    categoryOptions,
  }
}

