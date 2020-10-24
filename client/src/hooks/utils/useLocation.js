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
  if (location === "NL") {
    loc = location;
  } else if (EU_COUNTRIES.indexOf(location) !== -1) {
    loc = "EU";
  } else if (NA_COUNTRIES.indexOf(location) !== -1) {
    loc = "NA";
  } else {
    loc = "World"
  };

  return {
    location: loc,
    shippingThreshold: SHIPPING_THRESHOLDS[currency][loc]
  }
}
