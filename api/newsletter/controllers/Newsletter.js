'use strict';
const Mailchimp = require('mailchimp-api-v3');

const promo = require('../../promo/controllers/promo');

/**
 * A set of functions called "actions" for `Newsletter`
 */
const add = async (ctx) => {
  console.log(strapi.config.currentEnvironment.mailchimp);
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
    const promoCode = await promo.generateSnipcartPromo('news', 10.0);
    ctx.send({registered: true, promoCode: promoCode});
  } catch(err) {
    ctx.send({error: err.title});
  }
};

module.exports = {
  add
};
