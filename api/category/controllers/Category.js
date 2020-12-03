'use strict';
const format = require('../../utils/dataFormats');

/**
 * Read the documentation () to implement custom controller functions
 */

const getAll = async (ctx) => {
  const excludeFields = {
    createdAt: 0,
    updatedAt: 0,
    __v: 0,
  };
  const categories = await strapi.query('category').model
    .find(ctx.query, excludeFields)
    .populate([
      {
        path: 'coffees',
        match: { isActive: true },
      },
      {
        path: 'equipment',
        match: { isActive: true },
      },
      {
        path: 'merchandises',
        match: { isActive: true },
      },
      {
        path: 'promos',
        match: { isActive: true },
      },
    ]);
  const withCombinedProducts = categories.map(category => {
    return format.combineArray(category, 'products');
  });
  ctx.send(withCombinedProducts);
};

module.exports = {
  getAll,
};
