'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

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

const getEquipments = async (ctx) => {
  const includedFields = {
    ...baseFields,
  };
  const equipments = await strapi.query('equipment').model.find(ctx.query, includedFields);
  ctx.send({equipment: equipments});
};

module.exports = {
  getEquipments,
};
