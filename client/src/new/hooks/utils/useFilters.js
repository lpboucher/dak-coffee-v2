import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useQuery } from './useQuery';

import { fetchCategories, getCategories, getAllCategories } from '../../../ducks/categories';

export const useCategoryFilters = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { query } = useQuery("filter");

  const categoryIds = useSelector(state => getCategories(state));
  const allCategories = useSelector(state => getAllCategories(state));

  const allCategoryNames = allCategories.map(cat => cat.name);

  useEffect(() => {
    if (categoryIds && categoryIds.length < 1) {
      dispatch(fetchCategories());
    }
  }, []);

  const selectedCategories = allCategoryNames.filter(cat => query.includes(cat));
  console.log(selectedCategories);

  const updateFilters = useCallback((filter) => {
    query.push(filter);
    update(new URLSearchParams({filter: query.join()}).toString());
  }, [])

  const resetFilters = useCallback(() => {
    query = [""];
    update("");
  }, [])

  const update = useCallback((query) => {
    history.push({
      search: query,
    })
  }, [])

  return {
    allCategories: allCategoryNames,
    selectedCategories,
    updateFilters,
    resetFilters,
  }
}
