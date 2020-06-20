export const getCartProductPrice = (price) => {
  const priceObj = Object.keys(price).reduce((acc, curr) => {
    return { ...acc, [curr]: price[curr].value.toFixed(2) };
  }, {});
  return JSON.stringify(priceObj);
}

export const getCartProductOptions = (optionObj, type, selected=null) => {
  let options = {};
  const { increments, varieties, roast } = optionObj;
  if (type === "coffee" || type === "recurring") {
    options["data-item-custom1-name"] = "Weight";
    options["data-item-custom1-options"] = increments.map((inc) => `${inc.option}${inc.increment}`).join('|');
    options["data-item-custom1-value"] = selected ? selected.quantity : null;
  }
  if (type === "recurring") {
    options["data-item-custom2-name"] = "Varieties";
    options["data-item-custom2-options"] = varieties.join('|');
    options["data-item-custom2-value"] = selected ? selected.varieties : null;
    options["data-item-custom3-name"] = "Roast";
    options["data-item-custom3-options"] = roast.join('|');
    options["data-item-custom3-value"]= selected ? selected.roast : null;
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
