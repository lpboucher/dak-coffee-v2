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
  generateSnipcartPromo();
  try {
    const res = await mailchimp.post({
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
    console.log(res);

  } catch(err) {
    /*if (err.title === 'Member Exists') {
    }*/
    console.log(err);
  }
  //ctx.send(subscribeStatus);
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
      rate: 15.0,
      maxNumberOfUsages: 1
    }
  });
  console.log(discount.data);
};

module.exports = {
  add
};
