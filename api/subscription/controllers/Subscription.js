'use strict';

const getSubscriptions = async (ctx) => {
  const includedFields = {
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
  const subscriptions = await strapi.query('subscription').model.find({}, includedFields);
  ctx.send(subscriptions);
};

module.exports = {
  getSubscriptions,
};

