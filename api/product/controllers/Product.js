'use strict';
const snipcart = require('snipcart-api');
snipcart.configure('SECRET_API_KEY', 'ST_MDY2MzFjNzMtMDEyMi00NmI2LWI3ZTktZDIzZWM3YWY3NzY3NjM3MDg2Mjg2MzYzMDMyMjkw');
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
      'url': 'https://738666fa.ngrok.io/snipcartParser',
    };
  });
};

const snipcartFetch = async (ctx) => {
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