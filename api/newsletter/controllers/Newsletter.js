'use strict';
const Mailchimp = require('mailchimp-api-v3');

/**
 * A set of functions called "actions" for `Newsletter`
 */
const add = async (ctx) => {
  const mailchimp = new Mailchimp(strapi.config.currentEnvironment.mailchimp);
  const { name, email, language } = ctx.request.body;
  const listId = 'c1ea6cd510';
  let subscribeStatus;
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
    subscribeStatus = 'added';
  } catch(err) {
    if (err.title === 'Member Exists') {
      subscribeStatus = 'exists';
    }
    subscribeStatus = 'error';
  }
  ctx.send(subscribeStatus);
};

module.exports = {
  add
};
