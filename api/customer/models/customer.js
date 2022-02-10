'use strict';
// const mailchimpTx = require('@mailchimp/mailchimp_transactional');
const snipcart = require('snipcart-api');

/**
 * Lifecycle callbacks for the `customer` model.
 */

module.exports = {
    // Before saving a value.
    // Fired before an `insert` or `update` query.
    // beforeSave: async (model, attrs, options) => {},

    // After saving a value.
    // Fired after an `insert` or `update` query.
    // afterSave: async (model, response, options) => {},

    // Before fetching a value.
    // Fired before a `fetch` operation.
    // beforeFetch: async (model, columns, options) => {},

    // After fetching a value.
    // Fired after a `fetch` operation.
    // afterFetch: async (model, response, options) => {},

    // Before fetching all values.
    // Fired before a `fetchAll` operation.
    // beforeFetchAll: async (model, columns, options) => {},

    // After fetching all values.
    // Fired after a `fetchAll` operation.
    // afterFetchAll: async (model, response, options) => {},

    // Before creating a value.
    // Fired before an `insert` query.
    // beforeCreate: async (model, attrs, options) => {},

    // After creating a value.
    // Fired after an `insert` query.
    // afterCreate: async (model, attrs, options) => {},

    // Before updating a value.
    // Fired before an `update` query.
    beforeUpdate: async (data) => {
        const updatedValue = data._update;
        let existingValue;
        let discountExists = false;

        if (updatedValue) {
            existingValue = await strapi.query('customer').findOne({ id: updatedValue.id });
            discountExists = existingValue.walletDiscountId != null && existingValue.walletDiscountCode != null;
        }

        const preAndPostValuesExist = existingValue != null && updatedValue != null;

        if (preAndPostValuesExist && existingValue.isLocked === true && updatedValue.isLocked === false) {
            console.log('User has been unlocked, should send an email');
            // TODO set template in mailchimp transactional
            /*const mailchimp = mailchimpTx(strapi.config.currentEnvironment.mailchimpTrans);
            return await mailchimp.messages.sendTemplate({
                template_name: 'account-unlocked',
                template_content: [
                    { name: 'name', content: user.billingAddress.fullName },
                    { name: 'code', content: promoCode.code }
                ],
                message: {
                    from_email: 'info@dakcoffeeroasters.com',
                    subject: 'DAK Wholesale account unlocked',
                    to: [
                        {email: updatedValue.email, type: 'to'}
                    ]
                }
            });*/
        }

        if (
            preAndPostValuesExist &&
            discountExists &&
            updatedValue.walletValue !== existingValue.walletValue
        ) {
            console.log('Wallet value has been updated, updating to snipcart');
            try {
                snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcartWholesale);

                const walletDiscount = await snipcart.api.discounts.getOne({
                    urlParams: { id: existingValue.walletDiscountId }
                });

                await snipcart.api.discounts.update({
                    urlParams: { id: existingValue.walletDiscountId },
                    data: {
                        ...walletDiscount.data,
                        amount: updatedValue.walletValue,
                    }
                });
                console.log('discount updated with snipcart');
            } catch(err) {
                console.log('error updating discount', err);
            }
        }
    },

    // After updating a value.
    // Fired after an `update` query.
    // afterUpdate: async (model, attrs, options) => {},

    // Before destroying a value.
    // Fired before a `delete` query.
    // beforeDestroy: async (model, attrs, options) => {},

    // After destroying a value.
    // Fired after a `delete` query.
    // afterDestroy: async (model, attrs, options) => {}
};
