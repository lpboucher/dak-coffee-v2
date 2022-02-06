'use strict';
const mailchimpTx = require('@mailchimp/mailchimp_transactional');

const { INTERNAL_BUSINESS_EMAIL } = require('../../../client/src/global');

const templateDict = {
    'sample-request': { contentName: 'sample-type', subject: 'Sample request'},
    'product-notification': { contentName: 'product-name', subject: 'Product notification'},
    'account-unlocked': { contentName: '', subject: 'Account unlocked'},
    'access-requested': { contentName: 'registration-email', subject: 'Wholesale access'},
};

const processMessage = async (ctx) => {
    const { destinationEmail, messageType, content } = ctx.request.body;

    console.log(ctx.request.body);

    try {
        await sendEmail({
            from: INTERNAL_BUSINESS_EMAIL,
            to: destinationEmail,
            template: messageType,
            content: [{ name: templateDict[messageType].contentName, content: content }],
            subject: `DAK Coffee Roasters - ${templateDict[messageType].subject}`,
        });

        ctx.send({sent: true});
        ctx.response.status = 201;
    } catch(err) {
        ctx.send({sent: false});
        ctx.response.status = 400;
    }
};

/*
Parameter is object of the shape:
{
    from: info@dakcoffeeroasters.com
    to: customer@mail.com
    template: 'sample-request',
    content: [
        {name: 'name', content: 'Customer Name'}
    ],
    subject: 'The subject',
}
*/
const sendEmail = async ({from = INTERNAL_BUSINESS_EMAIL, to, template, content, subject}) => {
    const mailchimp = mailchimpTx(strapi.config.currentEnvironment.mailchimpTrans);
    console.log('sending to:', to);
    await mailchimp.messages.sendTemplate({
        template_name: template,
        template_content: content,
        message: {
            from_email: from,
            subject: subject,
            to: [
                {email: to, type: 'to'}
            ],
            bcc_address: INTERNAL_BUSINESS_EMAIL,
        }
    });
};

module.exports = {
    processMessage,
    sendEmail,
};
