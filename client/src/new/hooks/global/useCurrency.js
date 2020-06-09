import { useSelector } from 'react-redux';

import { getDisplayCurrency } from '../../../ducks/views';

import { BY_CODE } from '../../constants/symbols';
import { toCurrency } from '../../services/formats';

export const useCurrency = () => {
  const currency = useSelector(state => getDisplayCurrency(state));

  const currencySymbol = BY_CODE[currency];

  const displayAsCurrency = (amount) => toCurrency(currencySymbol, amount)

  return {
    currency,
    currencySymbol,
    toCurrency: displayAsCurrency
  }
}
