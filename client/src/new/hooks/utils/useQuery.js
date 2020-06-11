import { useLocation } from 'react-router-dom';

export const useQuery = (queryKey) => {
  const query = new URLSearchParams(useLocation().search).get(queryKey);
  const queryArray = query ? query.split(",") : [];

  return {
    query: queryArray,
  }
}
