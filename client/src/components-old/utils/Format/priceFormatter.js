export const getPriceRange = (price, currency) => {
  const base = getBasePrice(price, currency);

  if(hasPriceRange(base)) {
    return `${formatPrice(base.symbol, base.value)} - ${formatPrice(base.symbol, getUpperRange(base))}`
  }

  return `${formatPrice(base.symbol, base.value)}`
}

const getBasePrice = (price, currency) => {
  return price[currency.toLowerCase()]
}

const getUpperRange = (currentPrice) => {
  const upperIncrement = currentPrice.increments[currentPrice.increments.length - 1];
  return parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value;

}

const formatPrice = (symbol, price) => {
  return `${symbol}${price.toFixed(2)}`
}

const hasPriceRange = (currentPrice) => {
  return 'increments' in currentPrice
}
