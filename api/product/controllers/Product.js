'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
  snipcartParser: async (ctx) => {
    let products = await strapi.services.product.find(ctx.query);
    return products.map(product => {
      return {
        id: product._id,
        price: product.price,
        url: 'http://localhost:1337/snipcartParser'
      };
    });
  }
};
