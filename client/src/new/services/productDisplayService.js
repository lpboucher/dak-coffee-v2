import i18n from "i18next";
import { capitalize, toCurrency } from '../services/formats';

export const getDisplayedProductTitle = (type, slug) => {
  let title = capitalize(i18n.t(`products:${type}.${slug}.name`));
  let subtitle = "";
  let helper = "";
  if (type === 'coffee') {
    title += " - " + getTranslatedItem(type, slug, "country");
    subtitle += getTranslatedItem(type, slug, "process") + ", " + getTranslatedItem(type, slug, "lot");
    helper += getTranslatedItem(type, slug, "variety") + ", " + getTranslatedItem(type, slug, "altitude");
  } else if (type === 'equipment') {
    subtitle += getDisplayedProductDescription(type, slug);
  }
  return {title, subtitle, helper};
}

export const getDisplayedProductDescription = (type, slug) => {
  if (type === "equipment") {
    return i18n.t(`products:${type}.short`)
  }
  return i18n.t(`products:${type}.${slug}.short`)
}

export const getDisplayedProductPrice = (price) => {
  return toCurrency(price.symbol, price.value)
}

const getTranslatedItem = (type, slug, key) => capitalize(i18n.t(`products:${type}.${slug}.${key}`))

/*const displayCurr = currency.toLowerCase();
    const currentPrice = price[displayCurr];
    const lowerPrice = `${currentPrice.symbol}${currentPrice.value.toFixed(2)}`;
    const upperIncrement = currentPrice.increments[currentPrice.increments.length - 1];
    const incrPrice = parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value;
    const upperPrice = `${currentPrice.symbol}${incrPrice.toFixed(2)}`;*/
