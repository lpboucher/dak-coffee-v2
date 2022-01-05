'use strict';
const mailchimpTx = require('@mailchimp/mailchimp_transactional');

const templateDict = {
    'sample-request': { content: [], subject: 'Sample request'},
    'product-notification': { content: [], subject: 'Product notification'},
    'account-unlocked': { content: [], subject: 'Account unlocked'},
    'access-requested': { content: [], subject: 'Wholesale access'},
};

const processMessage = async (ctx) => {
    // const internalBusinessEmail = 'info@dakcoffeeroasters.com';
    const internalBusinessEmail = 'louisp.boucher@gmail.com';
    const { destinationEmail, messageType, isInternal } = ctx.request.body;
    const destination = isInternal ? internalBusinessEmail : destinationEmail;

    try {
        console.log(destinationEmail, messageType);
        await sendEmail({
            from: internalBusinessEmail,
            to: destination,
            template: messageType,
            content: templateDict[messageType].content,
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
const sendEmail = async ({from = 'info@dakcoffeeroasters.com', to, template, content, subject}) => {
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
            ]
        }
    });
};

module.exports = {
    processMessage,
    sendEmail,
};
