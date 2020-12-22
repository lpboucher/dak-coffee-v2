'use strict';
const snipcart = require('snipcart-api');
const mailchimpTx = require('@mailchimp/mailchimp_transactional');
const CodeGenerator = require('node-code-generator');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const generateSnipcartPromo = async (source, discountAmountOrRate) => {
  snipcart.configure('SECRET_API_KEY', strapi.config.currentEnvironment.snipcart);

  const codePrefix = source === 'gift' ? 'GIFT' : 'NEWS';

  const generator = new CodeGenerator();
  const [ code ] = generator.generateCodes(`${codePrefix}-***-***`, 1, {});

  const baseDiscount = {
    trigger: 'Code',
    code: code,
    maxNumberOfUsages: 1
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
    }
  };

  const discount = await snipcart.api.discounts.create({
    data: typeDiscount[source]
  });
  return discount.data;
};

const sendCodeEmail = async (user, promoCode) => {
  const mailchimp = mailchimpTx(strapi.config.currentEnvironment.mailchimpTrans);
  return await mailchimp.messages.sendTemplate({
    template_name: 'gift-card',
    template_content: [
      { name: 'name', content: user.billingAddress.fullName },
      { name: 'code', content: promoCode.code }
    ],
    message: {
      from_email: 'info@dakcoffeeroasters.com',
      subject: 'DAK Gift Card Code',
      to: [
        {email: user.email, type: 'to'}
      ]
    }
  });
};

module.exports = {
  generateSnipcartPromo,
  sendCodeEmail
};
