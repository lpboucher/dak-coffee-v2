'use strict';
const snipcart = require('snipcart-api');
/**
 * Read the documentation () to implement custom controller functions
 */

const snipcartParser = async (ctx) => {
  let products = await strapi.services.product.find(ctx.query);
  let subscriptions = await strapi.services.subscription.find(ctx.query);
  return [...products, ...subscriptions].map(product => {
    return {
      'id': product._id,
      'name': product.name,
      'price': {
        'eur': Math.round(product.price.eur.value * 100) / 100,
        'cad': Math.round(product.price.cad.value * 100) / 100,
      },
      'url': 'https://dakcoffeeroasters.com/snipcartParser',
    };
  });
};

const snipcartFetch = async (ctx) => {
  snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);
  console.log(strapi.config.currentEnvironment.snipcart);
  let products = await snipcart.api.products.getAll();
  let notRecurringProducts = products.data.items.filter(product => !isSubscription(product));
  let productsInv = notRecurringProducts.map(product => ({
    id: product.userDefinedId,
    stock: product.stock,
    totalStock: product.totalStock
  }));
  ctx.send(productsInv);
};

const isSubscription = (item) => {
  return item.name === 'The Classics' || item.name === 'The Roaster\'s Choice';
};

module.exports = {
  snipcartParser,
  snipcartFetch
};