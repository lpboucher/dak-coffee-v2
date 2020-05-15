import i18n from "i18next";
import { capitalize } from '../utils/formats';

export const getDisplayedProductTitle = (type, slug) => {
  let title = capitalize(i18n.t(`products:${type}.${slug}.name`));
  if (type === 'coffee') {
    title += " - " + capitalize(i18n.t(`products:${type}.${slug}.country`));
  }
  return title;
}

export const getDisplayedProductPrice = () => {

}

/*const displayCurr = currency.toLowerCase();
    const currentPrice = price[displayCurr];
    const lowerPrice = `${currentPrice.symbol}${currentPrice.value.toFixed(2)}`;
    const upperIncrement = currentPrice.increments[currentPrice.increments.length - 1];
    const incrPrice = parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value;
    const upperPrice = `${currentPrice.symbol}${incrPrice.toFixed(2)}`;*/
