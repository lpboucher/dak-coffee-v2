import { useSelector } from 'react-redux';
import { useCurrency } from '../global/useCurrency';

import { getLocation } from '../../ducks/views';

import {
  EU_COUNTRIES,
  NA_COUNTRIES,
  SHIPPING_THRESHOLDS
} from '../../constants/shipping';

export const useLocation = () => {
  const location = useSelector(state => getLocation(state));
  const { currency } = useCurrency();

  let loc;

  if (EU_COUNTRIES.indexOf(location) === -1 && NA_COUNTRIES.indexOf(location) === -1) {
    loc = "World";
  } else {
    loc = location;
  }

  return {
    location: loc,
    shippingThreshold: SHIPPING_THRESHOLDS[currency][loc]
  }
}
