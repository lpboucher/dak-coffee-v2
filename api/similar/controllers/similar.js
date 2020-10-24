'use strict';
const format = require('../../utils/dataFormats');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const getAll = async (ctx) => {
  const excludeFields = {
    createdAt: 0,
    updatedAt: 0,
    __v: 0,
    merchandise: 0,
  };
  const similars = await strapi.query('similar').model
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
    ]);
  const withCombinedProducts = similars.map(similar => {
    return format.combineArray(similar, 'products');
  });
  ctx.send(withCombinedProducts);
};

module.exports = {
  getAll,
};
