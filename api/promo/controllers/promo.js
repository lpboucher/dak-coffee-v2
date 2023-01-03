'use strict';
const snipcart = require('snipcart-api');
const CodeGenerator = require('node-code-generator');

const message = require('../../customer/controllers/message');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const generateSnipcartPromo = async (source, discountAmountOrRate) => {
    if (source === 'wholesale') {
        snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcartWholesale);
    } else {
        snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);
    }

    const codePrefixDict = {
        gift: 'GIFT',
        news: 'NEWS',
        wholesale: 'WALLET',
    };
    const codePrefix = codePrefixDict[source] || 'NEWS';

    const generator = new CodeGenerator();
    const [ code ] = generator.generateCodes(`${codePrefix}-***-***`, 1, {});

    const baseDiscount = {
        trigger: 'Code',
        code: code,
        maxNumberOfUsages: 1,
        combinable: false,
    };

    const typeDiscount = {
        gift: {
            ...baseDiscount,
            name: 'Gift Card',
            type: 'FixedAmount',
            amount: discountAmountOrRate,
        },
        news: {
            ...baseDiscount,
            name: 'Newsletter subscription',
            type: 'Rate',
            rate: discountAmountOrRate,
        },
        wholesale: {
            trigger: 'Code',
            code: code,
            name: 'Wholesale wallet',
            type: 'FixedAmount',
            amount: discountAmountOrRate,
        }
    };

    const discount = await snipcart.api.discounts.create({
        data: typeDiscount[source]
    });
    return discount.data;
};

const sendCodeEmail = async (user, promoCode) => {
    return await message.sendEmail({
        from: 'info@dakcoffeeroasters.com',
        to: user.email,
        template: 'gift-card',
        content: [
            { name: 'name', content: user.billingAddress.fullName },
            { name: 'code', content: promoCode.code }
        ],
        subject: 'DAK Gift Card Code',
    });
};

module.exports = {
    generateSnipcartPromo,
    sendCodeEmail
};
