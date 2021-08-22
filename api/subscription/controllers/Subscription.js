'use strict';
const snipcart = require('snipcart-api');

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

const snipcartDelete = async (ctx) => {
    snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);
    const { id } = ctx.params;

    try {
        await snipcart.api.subscriptions.cancel({
            urlParams: { id: id }
        });

        ctx.send({isSuccessful: true});
        ctx.response.status = 204;
    } catch(err) {
        ctx.send({isSuccessful: false});
        ctx.response.status = 400;
    }
};

const snipcartPause = async (ctx) => {
    snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);
    const { id } = ctx.params;

    try {
        await snipcart.api.subscriptions.pause({
            urlParams: { id: id }
        });

        ctx.send({isSuccessful: true});
        ctx.response.status = 200;
    } catch(err) {
        //console.log(err);
        ctx.send({isSuccessful: false});
        ctx.response.status = 400;
    }
};

const snipcartResume = async (ctx) => {
    snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);
    const { id } = ctx.params;

    try {
        await snipcart.api.subscriptions.resume({
            urlParams: { id: id }
        });

        ctx.send({isSuccessful: true});
        ctx.response.status = 200;
    } catch(err) {
        ctx.send({isSuccessful: false});
        ctx.response.status = 400;
    }
};

module.exports = {
    getSubscriptions,
    snipcartDelete,
    snipcartPause,
    snipcartResume,
};

