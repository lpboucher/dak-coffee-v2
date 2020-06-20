import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

import {
  fetchCategories,
  getAllCategories
} from '../../../ducks/categories';

export const useCategories = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => getAllCategories(state));

  useEffect(() => {
    if (categories && categories.length < 1) {
      dispatch(fetchCategories());
    }
  }, []);

  return {
    categories,
  }
}

