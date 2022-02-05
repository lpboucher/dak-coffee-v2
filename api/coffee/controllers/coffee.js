'use strict';
const { convertWeightStringToNumber } = require('../../webhooks/utils/shipping/tools');
const format = require('../../utils/dataFormats');

const { BACKEND_URL } = require('../../../client/src/global');

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

const getUpcomingProducts = async (ctx) => {
    const excludeFields = {
        Name: 0,
        Slug: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
    };
    const compilation = await strapi.query('compilation').model
        .findOne({ slug: 'upcoming' }, excludeFields)
        .populate([
            {
                path: 'coffees',
            },
            {
                path: 'merchandises',
            },
        ]);
    const withProducts = format.combineFullArray(compilation, 'products');

    const returnedCoffees = withProducts.products.map((oneCoffee) => {
        //const coffeeObj = oneCoffee.toObject();
        const coffeeObj = oneCoffee;
        const baseProduct = {
            id: coffeeObj.id,
            name: coffeeObj.name.en,
            collection: 'upcoming',
            images: coffeeObj.images,
            slug: coffeeObj.slug
        };

        const coffeeAddition = coffeeObj.type === 'coffee' ? {
            origin: coffeeObj.origin.country.en,
            tastingNotes: coffeeObj.origin.tasting_notes.en,
            process: coffeeObj.origin.process.en,
            varietal: coffeeObj.origin.variety,
            releasedOn: coffeeObj.releasedOn
        } : {};

        return {
            ...baseProduct,
            ...coffeeAddition
        };
    });
    ctx.send(returnedCoffees);
};

/*
250g/30%
250g/45%
1kg/30%
1kg/50%
*/
const getWholesaleCoffees = async (ctx) => {
    const includedFields = {
        ...baseFields,
        roast : 1,
        origin : 1,
        harvest: 1,
        releasedOn: 1,
        short: 1,
        isLowStock: 1,
        isAvailableAsFilter: 1,
        isAvailableAsEspresso: 1,
    };
    const coffees = await strapi.query('coffee').model.find(ctx.query, includedFields);
    const allCoffees = coffees.map((oneCoffee) => {
        const coffeeObj = oneCoffee.toObject();
        const priceInEUR = coffeeObj.price.find((p) => p.base.currency.toLowerCase() === 'eur');
        const volumeOptions = priceInEUR.increments.map((o) => o.option);
        const modifiers = getDerivedPriceModifiers(volumeOptions, priceInEUR);

        const roastOptions = [];
        if (coffeeObj.isAvailableAsEspresso === true) {
            roastOptions.push({name: 'Espresso'});
        }
        if (coffeeObj.isAvailableAsFilter === true) {
            roastOptions.push({name: 'Filter'});
        }

        return {
            id: coffeeObj.id,
            description: coffeeObj.description.en,
            shortDescription: coffeeObj.short.en,
            harvest: coffeeObj.harvest.en,
            name: coffeeObj.name.en,
            price: priceInEUR.base.value,
            collection: 'featured',
            origin: coffeeObj.origin.country.en,
            images: coffeeObj.images,
            tastingNotes: coffeeObj.origin.tasting_notes.en,
            process: coffeeObj.origin.process.en,
            varietal: coffeeObj.origin.variety,
            slug: coffeeObj.slug,
            releasedOn: coffeeObj.releasedOn,
            isLowStock: coffeeObj.isLowStock,
            roastOptions: roastOptions,
            modifiers: modifiers,
        };
    });

    const returnedCoffees = allCoffees.filter(({ name }) => !name.includes('(F)'));
    ctx.send(returnedCoffees);
};

/*
250g/30%
250g/45%
1kg/30%
1kg/50%
*/
const getOneWholesaleCoffee = async (ctx) => {
    const { slug } = ctx.params;
    const includedFields = {
        ...baseFields,
        roast: 1,
        origin: 1,
        harvest: 1,
        isAvailableAsFilter: 1,
        isAvailableAsEspresso: 1,
    };
    const coffee = await strapi.query('coffee').model.findOne({ slug:slug }, includedFields);
    const coffeeObj = coffee.toObject();
    const priceInEUR = coffeeObj.price.find((p) => p.base.currency.toLowerCase() === 'eur'.toLowerCase());
    const volumeOptions = priceInEUR.increments.map((o) => o.option);
    const modifiers = getDerivedPriceModifiers(volumeOptions, priceInEUR);


    const roastOptions = [];
    if (coffeeObj.isAvailableAsEspresso === true) {
        roastOptions.push({name: 'Espresso'});
    }
    if (coffeeObj.isAvailableAsFilter === true) {
        roastOptions.push({name: 'Filter'});
    }

    const returnedCoffee = {
        id: coffeeObj.id,
        description: coffeeObj.description.en,
        harvest: coffeeObj.harvest.en,
        name: coffeeObj.name.en,
        price: priceInEUR.base.value,
        collection: 'featured',
        origin: coffeeObj.origin.country.en,
        images: coffeeObj.images,
        tastingNotes: coffeeObj.origin.tasting_notes.en,
        process: coffeeObj.origin.process.en,
        varietal: coffeeObj.origin.variety,
        slug: coffeeObj.slug,
        roastOptions: roastOptions,
        modifiers: modifiers,
    };
    ctx.send(returnedCoffee);
};

const getAllProducts = async (ctx) => {
    const queries = await Promise.all([
        strapi.query('coffee').model.find(ctx.query, {...baseFields, roast: 1, origin: 1, harvest: 1}),
        strapi.query('merchandise').model.find(ctx.query, {...baseFields, details: 1}),
        strapi.query('equipment').model.find(ctx.query, {...baseFields, details: 1}),
        strapi.query('subscription').model.find(ctx.query, {...baseFields}),
        strapi.query('promo').model.find(ctx.query, {...baseFields, details: 1}),
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
        strapi.query('promo').model.findOne({ _id:id }, {...baseFields, details: 1}),
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
        strapi.query('promo').model.find(ctx.query, {...baseFields, details: 1}),
    ]);
    const data = [].concat(...queries).map(one => {
        const product = one.toObject();
        const baseCrawlerResponse = {
            'id': product._id,
            'name': product.name.en,
            'price': product.price.reduce((priceObj, onePrice) => {
                priceObj[onePrice.base.currency] = Math.round(onePrice.base.value * 100) / 100;
                return priceObj;
            }, {}),
            'url': `${BACKEND_URL}/snipcartParser`
        };
        const plans = product.type !== 'subscription' ? {} : {
            availablePlans: [
                {
                    'id': 'monthly-dak-coffee',
                    'name': 'Monthly coffee subscription',
                    'frequency': 'Monthly',
                    'interval': 1,
                },
            ]
        };
        return {
            ...baseCrawlerResponse,
            ...plans
        };
    });
    ctx.send(data);
};

const wholesaleSnipcartParser = async (ctx) => {
    const queries = await Promise.all([
        strapi.query('coffee').model.find(ctx.query, {...baseFields, roast: 1, origin: 1, harvest: 1}),
        strapi.query('merchandise').model.find(ctx.query, {...baseFields, details: 1}),
        strapi.query('equipment').model.find(ctx.query, {...baseFields, details: 1}),
    ]);
    const data = [].concat(...queries).map(one => {
        const product = one.toObject();
        const baseCrawlerResponse = {
            'id': product._id,
            'name': product.name.en,
            'price': product.price.reduce((priceObj, onePrice) => {
                priceObj[onePrice.base.currency] = Math.round(onePrice.base.value * 100) / 100;
                return priceObj;
            }, {}),
            'url': 'https://wholesale.dakcoffeeroasters.com/wholesale/snipcartParser'
        };
        return {
            ...baseCrawlerResponse,
        };
    });
    ctx.send(data);
};

const getRightRoastProducts = async (ctx) => {
    let coffees = await strapi.query('coffee').model.find({ isActive: true, ...ctx.query }, {...baseFields, roast: 1, origin: 1, harvest: 1});
    let sanitized = coffees.map((oneCoffee) => {
        const coffeeObj = oneCoffee.toObject();
        const priceInEur = coffeeObj.price.find((onePrice) => onePrice.base.currency === 'eur');
        return {
            id: coffeeObj.id,
            name: coffeeObj.name.en,
            slug: coffeeObj.slug,
            permalink: `https://dakcoffeeroasters.com/shop/coffee/${coffeeObj.slug}`,
            description: coffeeObj.description.en,
            weight: '250g',
            stock_status: 'in_stock',
            price: priceInEur.base.value,
            regular_price: `€${priceInEur.base.value}`,
            currency: priceInEur.base.currency
        };
    });
    ctx.send({data: sanitized});
};

const getRightRoastCoffeeById = async (ctx) => {
    const { id } = ctx.params;
    let coffee = await strapi.query('coffee').model.findOne({ _id:id }, {...baseFields, roast: 1, origin: 1, harvest: 1});
    const coffeeObj = coffee.toObject();
    const priceInEur = coffeeObj.price.find((onePrice) => onePrice.base.currency === 'eur');
    let sanitized = {
        id: coffeeObj.id,
        name: coffeeObj.name.en,
        slug: coffeeObj.slug,
        permalink: `https://dakcoffeeroasters.com/shop/coffee/${coffeeObj.slug}`,
        description: coffeeObj.description.en,
        weight: '250g',
        stock_status: 'in_stock',
        price: priceInEur.base.value,
        regular_price: `€${priceInEur.base.value}`,
        currency: priceInEur.base.currency
    };
    ctx.send({data: sanitized});
};

const getDerivedPriceModifiers = (volumeOptions, priceObject) => {
    const discounts = [{name: '30%', value: 0.3}, {name: '45%', value: 0.45}];
    const basePrice = priceObject.base.value;
    let modifier;
    let priceModifiers = [];

    for (let v = 0; v < volumeOptions.length; v++) {
        for (let d = 0; d < discounts.length; d++) {
            const index = `${volumeOptions[v]}/${discounts[d].name}`;
            if (priceObject.increments[v].value === '[+0.00]') {
                modifier = -(discounts[d].value * basePrice);
            } else if (v === volumeOptions.length - 1) {
                const weightAdjustment = convertWeightStringToNumber(volumeOptions[v]) / convertWeightStringToNumber(volumeOptions[0]);
                const discount = discounts[d].value === discounts[discounts.length - 1].value ? 0.5 : discounts[d].value;
                modifier = ((1 - discount) * (basePrice * weightAdjustment * 0.9)) - basePrice;
            }
            priceModifiers.push({name: index, priceModifier:modifier});
        }
    }

    return priceModifiers;
};

module.exports = {
    getProductBySlug,
    getProductById,
    getCoffees,
    getUpcomingProducts,
    getWholesaleCoffees,
    getOneWholesaleCoffee,
    getAllProducts,
    snipcartParser,
    wholesaleSnipcartParser,
    getRightRoastProducts,
    getRightRoastCoffeeById
};
