'use strict';
const Mailchimp = require('mailchimp-api-v3');
const snipcart = require('snipcart-api');
const CodeGenerator = require('node-code-generator');

/**
 * A set of functions called "actions" for `Newsletter`
 */
const add = async (ctx) => {
  const mailchimp = new Mailchimp(strapi.config.currentEnvironment.mailchimp);
  const { name, email, language } = ctx.request.body;
  const listId = 'c1ea6cd510';
  try {
    await mailchimp.post({
      path : `/lists/${listId}/members`,
      body: {
        'email_address': email,
        'status': 'subscribed',
        'language': language,
        'merge_fields': {
          'FNAME': name.split(' ')[0],
          'LNAME': name.split(' ')[1]
        }
      }
    });
    const promoCode = await generateSnipcartPromo();
    ctx.send({registered: true, promoCode: promoCode});
  } catch(err) {
    ctx.send({error: err.title});
  }
};

const generateSnipcartPromo = async () => {
  snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);

  const generator = new CodeGenerator();
  const [ code ] = generator.generateCodes('DAK-***-***', 1, {});

  const discount = await snipcart.api.discounts.create({
    data: {
      name: 'Newsletter subscription',
      trigger: 'Code',
      code: code,
      type: 'Rate',
      rate: 10.0,
      maxNumberOfUsages: 1
    }
  });
  return discount.data;
};

module.exports = {
  add
};
