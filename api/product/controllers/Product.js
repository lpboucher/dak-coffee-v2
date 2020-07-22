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
      'url': 'https://dakcoffeeroasters.com/api/snipcartParser',
    };
  });
};

const snipcartFetch = async () => {
  snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);
  let products = await snipcart.api.products.getAll();
  let notRecurringProducts = products.data.items.filter(product => !isSubscription(product));
  return notRecurringProducts.map(product => ({
    id: product.userDefinedId,
    stock: product.stock,
    totalStock: product.totalStock
  }));
};

const isSubscription = (item) => {
  return item.name === 'The Classics' || item.name === 'The Roaster\'s Choice' || item.name === 'Dak Coffee Subscription';
};

const getProductsWithInventory = async (ctx) => {
  let products = await strapi.services.product.find(ctx.query);
  let inventory = await snipcartFetch();
  let productsWithInventory = products.map(product => {
    const currentProductInv = inventory.find(inv => inv.id === product.id);
    return {
      ...currentProductInv,
      ...product
    };
  });
  ctx.send(productsWithInventory);
};

const getRightRoastProducts = async (ctx) => {
  let coffees = await strapi.services.product.find({type: 'coffee'});
  let inventory = await snipcartFetch();
  let sanitized = coffees.map((oneCoffee) => {
    const currentProductInv = inventory.find(inv => inv.id === oneCoffee.id);
    return {
      id: oneCoffee.id,
      name: oneCoffee.name,
      description: oneCoffee.name,
      quantity: '250g',
      stock_status: !currentProductInv.stock || currentProductInv.stock === 0 ? 'InStock' : 'OutStock',
      stock_quantity: currentProductInv.stock ? currentProductInv.stock : 25,
      price: oneCoffee.price['eur'],
    };
  });
  let byId = sanitized.reduce((obj, coffee) => {
    obj[coffee.id] = coffee;
    return obj;
  }, {});
  ctx.send(byId);
};

module.exports = {
  snipcartParser,
  getProductsWithInventory,
  getRightRoastProducts
};
