import { BY_CODE } from '../constants/symbols';

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const toCurrency = (currency, price) => {
  return `${BY_CODE[currency.toUpperCase()]} ${price.toFixed(2)}`
}
