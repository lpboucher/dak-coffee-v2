import { useSelector } from "react-redux"

import { getResponsive } from '../../../ducks/views';

export const useResponsive = () => {
  const {
    lessThan,
    greaterThan,
    is,
    mediaType
  } = useSelector(state => getResponsive(state));

  return {
    lessThan,
    greaterThan,
    is,
    mediaType
  }
}
