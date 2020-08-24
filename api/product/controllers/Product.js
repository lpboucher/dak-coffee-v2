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
    stock: product.stock || 25,
    totalStock: product.totalStock || 25
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
  let sanitized = coffees.map((oneCoffee) => {
    return {
      id: oneCoffee.id,
      name: oneCoffee.name,
      slug: oneCoffee.slug,
      permalink: `https://dakcoffeeroasters.com/shop/${oneCoffee.slug}`,
      description: oneCoffee.description,
      weight: '250g',
      stock_status: 'in_stock',
      price: oneCoffee.price['eur']['value'],
      regular_price: `${oneCoffee.price['eur']['symbol']}${oneCoffee.price['eur']['value']}`,
      currency: 'EUR'
    };
  });
  ctx.send({data: sanitized});
};

const getRightRoastCoffeeById = async (ctx) => {
  let coffee = await strapi.services.product.findOne({type: 'coffee', ...ctx.params});
  let sanitized = {
    id: coffee.id,
    name: coffee.name,
    slug: coffee.slug,
    permalink: `https://dakcoffeeroasters.com/shop/${coffee.slug}`,
    description: coffee.description,
    weight: '250g',
    stock_status: 'in_stock',
    price: coffee.price['eur']['value'],
    regular_price: `${coffee.price['eur']['symbol']}${coffee.price['eur']['value']}`,
    currency: 'EUR'
  };
  ctx.send({data: sanitized});
};

module.exports = {
  snipcartParser,
  getProductsWithInventory,
  getRightRoastProducts,
  getRightRoastCoffeeById
};
