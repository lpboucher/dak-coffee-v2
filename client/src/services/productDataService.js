import { getProductOptions } from './productDisplayService';

export const getCartProductPrice = (price) => {
  const priceObj = price.reduce((acc, curr) => {
    return { ...acc, [curr.base.currency]: curr.base.value.toFixed(2) };
  }, {})
  return JSON.stringify(priceObj);
}

export const getCartProductOptions = (priceString, optionObj, type="coffee", selected=null, additionalOptions = []) => {
  let options = {};
  const { increments } = optionObj;
  if (type === "coffee" || type === "subscription") {
    options["data-item-custom1-name"] = "Weight";
    options["data-item-custom1-options"] = increments.map((inc) => `${inc.option}${inc.value}`).join('|');
    options["data-item-custom1-value"] = selected ? selected.quantity : null;
  }
  if (type === "coffee") {
    if (Array.isArray(additionalOptions) && additionalOptions.length > 0) {
        const roastOptions = getProductOptions(type).find(opt => opt.name === "roast");
        const individualOptions = roastOptions.options.filter(opt => additionalOptions.includes(opt.value)).map(opt => opt.value);
        console.log(individualOptions);
        options["data-item-custom2-name"] = "Roast";
        options["data-item-custom2-options"] = individualOptions.join('|');
        options["data-item-custom2-required"] = true;
        if(selected != null && selected.roast != null) {
          options["data-item-custom2-value"]= selected.roast;
        } else {
          options["data-item-custom3-name"] = "Quick-add";
          options["data-item-custom3-type"] = "hidden";
          options["data-item-custom3-value"] = "None";
        }
    }
  }
  if (type === "subscription") {
    const roastOptions = getProductOptions(type).find(opt => opt.name === "roast");
    const individualOptions = roastOptions.options.map(opt => opt.value);
    options["data-item-custom2-name"] = "Roast";
    options["data-item-custom2-options"] = individualOptions.join('|');
    options["data-item-custom2-value"]= selected ? selected.roast : null;
    options["data-item-selected-plan"]= "monthly-dak-coffee";
    options["data-plan1-id"] = "monthly-dak-coffee";
    options["data-plan1-name"] = "Monthly coffee subscription";
    options["data-plan1-frequency"] = "Monthly";
    options["data-plan1-interval"] = "1";
  }
  if (type === "promo") {
    options["data-item-custom1-name"] = "Amount";
    options["data-item-custom1-options"] = increments.map((inc) => `${inc.option}${inc.value}`).join('|');
    options["data-item-custom1-value"] = selected ? selected.quantity : null;
  }
  if (
        type === "clothing" ||
        type === "t-shirt" ||
        type === "roasting-tee" ||
        type === "brewing-tee" ||
        type === "crewneck" ||
        type === "nitro-crew" ||
        type === "anniversary-crewneck" ||
        type === "anniversary-tshirt" ||
        type === "anniversary-longsleeve" ||
        type === "dak-olive" ||
        type === "dak-t-shirt" ||
        type === "dak-crewneck" ||
        type === "dak-hoodie" ||
        type === "dak-longsleeve"
    ) {
    const sizes = getProductOptions(type).find(opt => opt.name === "size");
    const colors = getProductOptions(type).find(opt => opt.name === "color");
    const sizeOptions = sizes.options.map(opt => opt.value);
    const colorOptions = colors.options.map(opt => opt.value);
    options["data-item-custom1-name"] = "Size";
    options["data-item-custom1-options"] = sizeOptions.join('|');
    options["data-item-custom1-value"] = selected ? selected.size : null;
    options["data-item-custom2-name"] = "Color";
    options["data-item-custom2-options"] = colorOptions.join('|');
    options["data-item-custom2-value"] = selected ? selected.color : null;
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
