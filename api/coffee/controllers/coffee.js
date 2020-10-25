'use strict';

const baseFields = {
  slug : 1,
  name : 1,
  description : 1,
  short : 1,
  price : 1,
  images : 1,
  type: 1,
  id: 1,
  isActive: 1
};

const getCoffees = async (ctx) => {
  const includedFields = {
    ...baseFields,
    roast : 1,
    origin : 1,
    harvest: 1,
  };
  const coffees = await strapi.query('coffee').model.find(ctx.query, includedFields);
  ctx.send({coffees: coffees});
};

const getAllProducts = async (ctx) => {
  const queries = await Promise.all([
    strapi.query('coffee').model.find(ctx.query, {...baseFields, roast: 1, origin: 1, harvest: 1}),
    strapi.query('merchandise').model.find(ctx.query, {...baseFields, details: 1}),
    strapi.query('equipment').model.find(ctx.query, {...baseFields, details: 1}),
    strapi.query('subscription').model.find(ctx.query, {...baseFields}),
  ]);
  const products = [].concat(...queries).map(one => one.toObject());
  const result = {
    products: products,
    subscriptions: products[products.length -1]
  };
  ctx.send(result);
};

const getProductBySlug = async (ctx) => {
  const { model, resource } = ctx.params;
  const includedFields = {
    coffee: {
      ...baseFields,
      roast: 1,
      origin: 1,
      harvest: 1
    },
    equipment: {
      ...baseFields,
      details: 1
    },
    merchandise: {
      ...baseFields,
      details: 1
    },
    subscription: {
      ...baseFields
    }
  };
  const query = await strapi.query(model).model.findOne({ slug:resource }, includedFields[model]);
  const result = {
    product: query,
    subscription: model === 'subsription' ? query : null
  };
  ctx.send(result);
};

const getProductById = async (ctx) => {
  const { id } = ctx.params;
  const queries = await Promise.all([
    strapi.query('coffee').model.findOne({ _id:id }, {...baseFields, roast: 1, origin: 1, harvest: 1}),
    strapi.query('merchandise').model.findOne({ _id:id }, {...baseFields, details: 1}),
    strapi.query('equipment').model.findOne({ _id:id }, {...baseFields, details: 1}),
    strapi.query('subscription').model.findOne({ _id:id }, {...baseFields}),
  ]);
  const result = {
    product: queries.find(query => query != null),
    subscription: queries[queries.length -1]
  };
  ctx.send(result);
};

const snipcartParser = async (ctx) => {
  const queries = await Promise.all([
    strapi.query('coffee').model.find(ctx.query, {...baseFields, roast: 1, origin: 1, harvest: 1}),
    strapi.query('merchandise').model.find(ctx.query, {...baseFields, details: 1}),
    strapi.query('equipment').model.find(ctx.query, {...baseFields, details: 1}),
    strapi.query('subscription').model.find(ctx.query, {...baseFields}),
  ]);
  const data = [].concat(...queries).map(one => {
    const product = one.toObject();
    return {
      'id': product._id,
      'name': product.name.en,
      'price': product.price.reduce((priceObj, onePrice) => {
        priceObj[onePrice.base.currency] = Math.round(onePrice.base.value * 100) / 100;
        return priceObj;
      }, {}),
      'url': 'https://dakcoffeeroasters.com/api/snipcartParser'
    };
  });
  ctx.send(data);
};

module.exports = {
  getProductBySlug,
  getProductById,
  getCoffees,
  getAllProducts,
  snipcartParser
};
