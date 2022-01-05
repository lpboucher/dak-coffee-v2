'use strict';
// const mailchimpTx = require('@mailchimp/mailchimp_transactional');

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
        let existingValue;
        const updatedValue = data._update;
        if (updatedValue) {
            existingValue = await strapi.query('customer').findOne({ id: updatedValue.id });
        }

        //console.log('updated', updatedValue);
        //console.log('existing', existingValue);

        if (existingValue && existingValue.isLocked === true && updatedValue && updatedValue.isLocked === false) {
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
