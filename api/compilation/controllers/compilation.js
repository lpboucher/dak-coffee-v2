'use strict';
const format = require('../../utils/dataFormats');

const getCompilation = async (ctx) => {
    const { slug } = ctx.params;
    const excludeFields = {
        Name: 0,
        Slug: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
    };
    const compilation = await strapi.query('compilation').model
        .findOne({slug: slug}, excludeFields)
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
                path: 'subscriptions',
                match: { isActive: true },
            },
        ]);
    const withProducts = format.combineArray(compilation, 'products');
    ctx.send(withProducts);
};

const getAll = async (ctx) => {
    const excludeFields = {
        Name: 0,
        Slug: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
    };
    const compilations = await strapi.query('compilation').model
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
                path: 'subscriptions',
                match: { isActive: true },
            },
        ]);
    const withCombinedProducts = compilations.map(compilation => {
        return format.combineArray(compilation, 'products');
    });
    ctx.send(withCombinedProducts);
};

const getCompilationProducts = async (ctx) => {
    const { slug } = ctx.params;
    const excludeFields = {
        categories: 0,
        compilations: 0,
        Name: 0,
        Slug: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
    };
    const compilation = await strapi.query('compilation').model
        .findOne({slug: slug}, excludeFields)
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
                path: 'subscriptions',
                match: { isActive: true },
            },
        ]);
    const withProducts = format.combineFullArray(compilation, 'products');
    const modifiedProducts = withProducts.products.map((oneProduct) => {
        if (oneProduct.type === 'coffee') {
            const roastOptions = [];
            if (oneProduct.isAvailableAsFilter === true) {
                roastOptions.push('filter');
            }
            if (oneProduct.isAvailableAsEspresso === true) {
                roastOptions.push('espresso');
            }

            return {
                ...oneProduct,
                roastOptions: roastOptions,
            };
        } else {
            return oneProduct;
        }
    });
    withProducts.products = modifiedProducts;
    const onlySubscriptions = compilation.toObject().subscriptions;
    ctx.send({...withProducts, subscriptions: onlySubscriptions});
};

module.exports = {
    getCompilation,
    getAll,
    getCompilationProducts
};
