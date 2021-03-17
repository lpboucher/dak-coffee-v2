import React from 'react';
import i18n from "i18next";
import { capitalize, toCurrency } from '../services/formats';

import {
  LimitedEdition,
  MysteryCoffee,
  EspressoRoast,
  FilterRoast
} from '../utils/medallion/ProductMedallions';

import { FLAVORS } from "../constants/flavors";

export const getPriceInCurrency = (priceArr = [], activeCurrency) => {
  return priceArr.find(onePrice => onePrice.base.currency === activeCurrency.toLowerCase());
}

export const hasPricingOptions = (type) => {
  return type === "coffee" || type === "subscription" || type === "promo";
}

export const getDisplayedProductTitle = ({type, name, origin, slug}, selected) => {
  let title = getTranslatedItem(name)
  let subtitle = "";
  let helper = "";
  if (type === 'coffee') {
    title += " - " + getTranslatedItem(origin.country);
    subtitle += getTranslatedItem(origin.tasting_notes);
    helper += getTranslatedItem(origin.process) + ", " + origin.variety;
  }
  if (type === 'equipment') {
    subtitle += getDisplayedProductDescription(type, slug);
  }
  if (type === 'subscription' && selected) {
    title = selected.split("-")[0] + " " + title;
  }
  if (type === 'promo') {
    subtitle += getDisplayedProductDescription(type, slug);
  }
  return {title, subtitle, helper};
}

export const getStaticProductPrice = (type, priceObj) => {
  const dict = {
    coffee: `${i18n.t("price.from")} ${getDisplayedProductPrice(priceObj)}`,
    subscription: `${i18n.t("price.from")} ${getDisplayedProductPrice(priceObj)}`,
    equipment: getDisplayedProductPrice(priceObj),
    merchandise: getDisplayedProductPrice(priceObj),
    promo: `${i18n.t("price.from")} ${getDisplayedProductPrice(priceObj)}`,
  }
  return dict[type] || null;
}

export const getProductOptions = (type) => {
  const dict = {
    subscription: [
      { name: "roast", options: [
          {label: "espresso", value: "espresso"},
          {label: "filter", value: "filter"},
        ]
      },
    ]
  }
  return dict[type] || [];
}

export const getCoffeeCharacteristics = ({type, ...coffee}) => {
  if (type === "coffee") {
    const { altitude, process, variety } = coffee.origin;
    const bean = `${getTranslatedItem(process)}, ${variety}`;
    const altitudeStr = `${i18n.t("altitude")} ${altitude}`;
    const packaging = i18n.t("recyclable-coffee-bags");
    return {bean, altitude: altitudeStr, packaging};
  }
  return null;
}

export const getLongProductDescription = ({type, ...rest}) => {
  if (type === "coffee") return getTranslatedItem(rest.harvest);
  if (type === "subscription") return getTranslatedItem(rest.description);
  return getTranslatedItem(rest.details).split(";");
}

export const getTranslatedItem = (obj) => {
  const lang = i18n.language || "en";
  return capitalize(obj[lang])
}

export const getMedallion = (categories, restrictSingleCategory=null) => {
  const dict = {
    "limited-edition-coffee": <LimitedEdition width="100px"/>,
    "mystery-coffee": <MysteryCoffee width="100px"/>,
    "filter-coffee": <FilterRoast width="100px"/>,
    "espresso-coffee": <EspressoRoast width="100px"/>,
  }
  if (restrictSingleCategory != null) {
    return dict[restrictSingleCategory];
  }
  if (categories.includes("limited-edition-coffee")) {
    return dict["limited-edition-coffee"];
  }
  if (categories.includes("mystery-coffee")) {
    return dict["mystery-coffee"];
  }
  if (categories.includes("filter-coffee")) {
    return dict["filter-coffee"];
  }
  if (categories.includes("espresso-coffee")) {
    return dict["espresso-coffee"];
  }
}

export const getTastingNotesWithMedallion = ({type, ...coffee}) => {
  if (type === "coffee") {
    const { origin } = coffee;
    const individualFlavors = origin.tasting_notes["en"].split(",");
    const translatedFlavors = getTranslatedItem(origin.tasting_notes).split(",");
    return individualFlavors.map((flavor, index) => {
      return { label: translatedFlavors[index], icon: FLAVORS[flavor.toLowerCase().trim()] }
    })
  }
  return null;
}

export const getDisplayedProductDescription = (description) => {
  return getTranslatedItem(description)
}

export const getDisplayedProductPrice = ({currency, value}) => {
  return toCurrency(currency, value)
}

export const getPriceIncrements = (type, {increments, base}) => {
  if (hasPricingOptions(type)) {
    return increments.reduce((obj, inc) => {
      const priceStr = inc.value.replace(/[+[\]]+/g, "");
      const incPrice = priceStr ? parseFloat(priceStr) + base.value : base.value;
      obj[inc.option] = incPrice;
      return obj;
    }, {})
  }
  return base.value;
}

export const sortProductsByCoffeeAndSubscriptions = (products) => {
  // products parameter should be array of product objects, not only ids
  return products.sort((a,b) => compareIsCoffee(a,b) || compareIsSubscription(a,b))
}

export const sortCategories = (categories) => {
  return categories.sort((a,b) => a.order - b.order)
}

const compareIsCoffee = (a, b) => (a.type === 'coffee' ? 0 : 1) - (b.type === 'coffee' ? 0 : 1);

const compareIsSubscription = (a, b) => (a.type === 'subscription' ? 0 : 1) - (b.type === 'subscription' ? 0 : 1);
