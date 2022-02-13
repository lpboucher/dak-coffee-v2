'use strict';
const snipcart = require('snipcart-api');
const promo = require('../../promo/controllers/promo');
const message = require('../../customer/controllers/message');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const createCustomer = async (ctx) => {
    const newCustomer = ctx.request.body;

    try {
        const walletDiscount = await promo.generateSnipcartPromo('wholesale', 0);

        await strapi.query('customer').create({
            name: newCustomer.contactName,
            business: newCustomer.businessName,
            email: newCustomer.email.toLowerCase(),
            password: newCustomer.password,
            sector: newCustomer.sector,
            VAT: newCustomer.vatNumber,
            snipcartCustomerId: newCustomer.snipcartCustomerId,
            snipcartSessionToken: newCustomer.snipcartSessionToken,
            walletValue: 0,
            walletDiscountCode: walletDiscount.code,
            walletDiscountId: walletDiscount.id,
        });

        /*await message.sendEmail({
            to: newCustomer.email,
            template: 'access-requested',
            content: [{ name: 'registration-email', content: newCustomer.email }],
            subject: 'DAK Coffee Roasters - Wholesale access',
        });*/

        ctx.send({registered: true});
        ctx.response.status = 201;
    } catch(err) {
        ctx.send({registered: false});
        ctx.response.status = 400;
    }
};

const loginCustomer = async (ctx) => {
    // only used for wholesale customers
    snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcartWholesale);
    const { email, password, sessionToken } = ctx.request.body;

    try {
        const customer = await strapi.query('customer').model.findOne({ email:email.toLowerCase() });

        if (!customer) {
            ctx.send({loggedIn: false});
            ctx.response.status = 404;
            ctx.response.message = 'User not found';
            ctx.message = 'User not found';
        } else if(customer.toObject().isLocked) {
            ctx.send({loggedIn: false});
            ctx.response.status = 403;
            ctx.response.message = 'Account is locked';
        } else if (customer.toObject().password !== password) {
            ctx.send({loggedIn: false});
            ctx.response.status = 401;
            ctx.response.message = 'Incorrect password';
        } else {
            const updatedCustomer = { ...customer.toObject(), snipcartSessionToken: sessionToken };
            await strapi.query('customer').update({ id: customer.id}, updatedCustomer);

            const snipcartSession = await snipcart.api.userSessions.getOne({
                urlParams: { token: sessionToken },
            });
            ctx.send({...updatedCustomer, loggedIn: true, expires: snipcartSession.data.expires});
            ctx.response.status = 200;
        }
    } catch(err) {
        console.log(err);
        ctx.send({loggedIn: false});
        ctx.response.status = 400;
    }
};

const registerOrder = async (ctx) => {
    // only used for wholesale customers
    snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcartWholesale);
    const { id } = ctx.params;
    const { walletValue } = ctx.request.body;
    const newWalletAmount = Math.round(walletValue * 100) / 100;

    try {
        const customer = await strapi.query('customer').model.findOne({ email:id });
        const walletDiscount = await snipcart.api.discounts.getOne({
            urlParams: { id: customer.toObject().walletDiscountId }
        });

        await snipcart.api.discounts.update({
            urlParams: { id: customer.toObject().walletDiscountId },
            data: {
                ...walletDiscount.data,
                amount: newWalletAmount,
            }
        });
        await strapi.query('customer').update(
            { email:id },
            {
                walletValue: newWalletAmount,
                lastOrderDate: new Date(),
            }
        );

        ctx.send({updated: true});
        ctx.response.status = 201;
    } catch(err) {
        console.log(err);
        ctx.send({updated: false});
        ctx.response.status = 400;
    }
};

const checkExistingCustomer = async (ctx) => {
    // only used for wholesale customers
    snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcartWholesale);
    let type;
    const { id } = ctx.params;

    if (ctx.query == null || Object.keys(ctx.query).length === 0) {
        type = 'email';
    } else {
        ({ type } = ctx.query);
    }

    try {
        const beCustomers = await strapi.query('customer').model.find();
        const feCustomers = await snipcart.api.customers.getAll();

        const typeExists = beCustomers.some((oneCustomer) => oneCustomer[type].toLowerCase() === id.toLowerCase()) || feCustomers.data.items.some((oneCustomer) => oneCustomer[type].toLowerCase() === id.toLowerCase());
        if (typeExists) {
            ctx.send({valueTaken: true});
            ctx.response.status = 200;
        } else {
            ctx.send({valueTaken: false});
            ctx.response.status = 200;
        }
    } catch(err) {
        console.log(err);
        ctx.send({valueTaken: false});
        ctx.response.status = 200;
    }
};

module.exports = {
    createCustomer,
    loginCustomer,
    registerOrder,
    checkExistingCustomer,
};
