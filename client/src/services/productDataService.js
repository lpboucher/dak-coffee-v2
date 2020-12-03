import { getProductOptions } from './productDisplayService';

export const getCartProductPrice = (price) => {
  const priceObj = price.reduce((acc, curr) => {
    return { ...acc, [curr.base.currency]: curr.base.value.toFixed(2) };
  }, {})
  return JSON.stringify(priceObj);
}

export const getCartProductOptions = (optionObj, type="coffee", selected=null) => {
  let options = {};
  const { increments } = optionObj;
  if (type === "coffee" || type === "subscription") {
    options["data-item-custom1-name"] = "Weight";
    options["data-item-custom1-options"] = increments.map((inc) => `${inc.option}${inc.value}`).join('|');
    options["data-item-custom1-value"] = selected ? selected.quantity : null;
  }
  if (type === "subscription") {
    const roastOptions = getProductOptions(type).find(opt => opt.name === "roast");
    const individualOptions = roastOptions.options.map(opt => opt.value);
    options["data-item-custom2-name"] = "Roast";
    options["data-item-custom2-options"] = individualOptions.join('|');
    options["data-item-custom2-value"]= selected ? selected.roast : null;
    options["data-item-payment-interval"]="Month";
    options["data-item-payment-interval-count"]="1";
  }
  if (type === "promo") {
    options["data-item-custom1-name"] = "Amount";
    options["data-item-custom1-options"] = increments.map((inc) => `${inc.option}${inc.value}`).join('|');
    options["data-item-custom1-value"] = selected ? selected.quantity : null;
  }
  if (selected && selected.number != 1) {
    options["data-item-quantity"] = selected.number;
  }
  return options;
}

export const buildProductQuery = (types, limit) => {
  let query = [...types.map(type => `type=${type}`)];
  if (limit) {
    query.push(`_limit=${limit}`)
  }
  return query;
}
