export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const toCurrency = (currencySymbol, price) => {
  return `${currencySymbol} ${price.toFixed(2)}`
}
