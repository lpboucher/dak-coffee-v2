export const getCartProductPrice = (price) => {
  const priceObj = Object.keys(price).reduce((acc, curr) => {
    return { ...acc, [curr]: price[curr].value.toFixed(2) };
  }, {});
  return JSON.stringify(priceObj);
}

export const getCartProductOptions = (optionObj, type) => {
  let options = {};
  const { increments, varieties, roast } = optionObj;
  if (type === "coffee" || type === "recurring") {
    options["data-item-custom1-name"] = "Weight";
    options["data-item-custom1-options"] = increments.map((inc) => `${inc.option}${inc.increment}`).join('|');
  }
  if (type === "recurring") {
    options["data-item-custom2-name"] = "Varieties";
    options["data-item-custom2-options"] = varieties.join('|');
    options["data-item-custom3-name"] = "Roast";
    options["data-item-custom3-options"] = roast.join('|');
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
