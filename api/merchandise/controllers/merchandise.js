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

 const getWholesaleMerchandise = async (ctx) => {
    const includedFields = {
      ...baseFields,
      details: 1,
    };
    const merchandises = await strapi.query('merchandise').model.find(ctx.query, includedFields);
    const returnedMerchandise = merchandises.map((oneMerchandise) => {
        const merchObj = oneMerchandise.toObject();
        return {
            id: merchObj.id,
            description: merchObj.description.en,
            name: merchObj.name.en,
            price: merchObj.price[0].base.value,
            collection: "featured",
            slug: merchObj.slug
        }
    })
    ctx.send(returnedMerchandise);
  };

const getOneWholesaleMerchandise = async (ctx) => {
    const { slug } = ctx.params;
    const includedFields = {
        ...baseFields,
        details: 1,
      };
  const merch = await strapi.query('merchandise').model.findOne({ slug:slug }, includedFields);
  const merchObj = merch.toObject();
  const returnedMerch = {
        id: merchObj.id,
        description: merchObj.description.en,
        name: merchObj.name.en,
        price: merchObj.price[0].base.value,
        collection: "featured",
        slug: merchObj.slug
    }
  ctx.send(returnedMerch);
};

module.exports = {
    getWholesaleMerchandise,
    getOneWholesaleMerchandise
};
