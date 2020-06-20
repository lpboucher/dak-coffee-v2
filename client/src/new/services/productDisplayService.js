import React from 'react';
import i18n from "i18next";
import { capitalize, toCurrency } from '../services/formats';

import { LimitedEdition } from '../utils/medallion/ProductMedallions';

export const getDisplayedProductTitle = (type, slug) => {
  let title = capitalize(i18n.t(`products:${type}.${slug}.name`));
  let subtitle = "";
  let helper = "";
  if (type === 'coffee') {
    title += " - " + getTranslatedItem(type, slug, "country");
    subtitle += getTranslatedItem(type, slug, "taste");
    helper += getTranslatedItem(type, slug, "process") + ", " + getTranslatedItem(type, slug, "variety");
  } else if (type === 'equipment') {
    subtitle += getDisplayedProductDescription(type, slug);
  }
  return {title, subtitle, helper};
}

export const getStaticProductPrice = (type, price) => {
  const dict = {
    coffee: `From ${getDisplayedProductPrice(price)}`,
    subscription: `From ${getDisplayedProductPrice(price)}`,
    equipment: getDisplayedProductPrice(price),
  }
  return dict[type] || null;
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

export const getPriceIncrements = (priceObj) => {
  return priceObj.increments.reduce((obj, inc) => {
    const priceStr = inc.increment.replace(/[+\[\]]+/g, "");
    const incPrice = priceStr ? parseFloat(priceStr) + priceObj.value : priceObj.value;
    obj[inc.option] = incPrice;
    return obj;
  }, {})
}

const getTranslatedItem = (type, slug, key) => capitalize(i18n.t(`products:${type}.${slug}.${key}`));

export const getMedallion = (type) => {
  const dict = {
    coffee: <LimitedEdition width="100px"/>
  }
  return dict[type] || null;
}

export const sortProductsByCoffeeAndSubscriptions = (products) => {
  // products parameter should be array of product objects, not only ids
  return products.sort((a,b) => compareIsCoffee(a,b) || compareIsSubscription(a,b))
}

const compareIsCoffee = (a, b) => (a.type === 'coffee' ? 0 : 1) - (b.type === 'coffee' ? 0 : 1);

const compareIsSubscription = (a, b) => (a.type === 'subscription' ? 0 : 1) - (b.type === 'subscription' ? 0 : 1);

/*const displayCurr = currency.toLowerCase();
    const currentPrice = price[displayCurr];
    const lowerPrice = `${currentPrice.symbol}${currentPrice.value.toFixed(2)}`;
    const upperIncrement = currentPrice.increments[currentPrice.increments.length - 1];
    const incrPrice = parseFloat(upperIncrement.increment.replace('[','').replace('+','').replace(']','')) + currentPrice.value;
    const upperPrice = `${currentPrice.symbol}${incrPrice.toFixed(2)}`;*/
