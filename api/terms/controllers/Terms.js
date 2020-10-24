'use strict';

/**
 * Read the documentation () to implement custom controller functions
 */

const getTermBySlug = async (ctx) => {
  const { slug } = ctx.params;
  let term = await strapi.services.terms.findOne({slug: slug});
  ctx.send(term);
};

module.exports = {
  getTermBySlug
};
