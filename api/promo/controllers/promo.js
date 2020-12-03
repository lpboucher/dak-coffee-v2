'use strict';
const snipcart = require('snipcart-api');
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

module.exports = {
  generateSnipcartPromo
};
