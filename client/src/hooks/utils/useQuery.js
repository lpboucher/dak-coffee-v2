import { useCallback } from "react";
import { useLocation, useHistory } from 'react-router-dom';

export const useQuery = (queryKey) => {
  const history = useHistory();

  const query = new URLSearchParams(useLocation().search).get(queryKey);
  const queryArray = query ? query.split(",") : [];

  const updateQuery = useCallback((query) => {
      history.push({
        search: new URLSearchParams({[queryKey]: query.join()}).toString()
      })
  }, [])

  const removeQuery = () => history.push();

  return {
    query: queryArray,
    updateQuery,
    removeQuery
  }
}
