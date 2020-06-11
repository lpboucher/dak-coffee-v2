import cogoToast from 'cogo-toast';
import i18n from "i18next";

const options = {
  position: 'bottom-right',
  hideAfter: 3
}

export const notify = {
  cart: {
    add: ({quantityStep, name, price}) => {
      cogoToast.success(`${quantityStep}x ${name} +${price.toFixed(2)}`, {...options, heading: 'Added to Cart'})
    },
  },
  newsletter: {
    add: (code) => {
      cogoToast.success(`Thank you! Use ${code} for a 15% discount`, {...options, hideAfter: 8, heading: 'Subscribed!'})
    },
    error: (messageKey) => {
      cogoToast.error(`${i18n.t(messageKey)}`, {...options, heading: 'Error'})
    },
  }
}
