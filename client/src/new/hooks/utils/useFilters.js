import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useQuery } from './useQuery';

import {
  getActiveFilters,
  addFilters,
  removeFilter,
  clearFilters
} from '../../../ducks/views';

export const useQueryFilters = (dataType) => {
  const { query, updateQuery, removeQuery } = useQuery("filter");
  const dispatch = useDispatch();

  const filters = useSelector((state) => getActiveFilters(state, dataType));

  useEffect(() => {
    if (query && query.length > 0) {
      dispatch(addFilters(dataType, query));
    }
  }, []);

  useEffect(() => {
    if (filters && filters.length > 0) {
      updateQuery(filters);
    } else {
      removeQuery()
    }
  }, [filters]);

  const add = useCallback((newFilters) => {
    dispatch(addFilters(dataType, newFilters))
  }, [])

  const remove = useCallback((removedFilter) => {
    dispatch(removeFilter(dataType, removedFilter))
  }, [])

  const clear = useCallback(() => {
    dispatch(clearFilters(dataType))
  }, [])

  return {
    activeFilters: filters,
    add,
    remove,
    clear
  }
}
