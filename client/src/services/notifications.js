import cogoToast from 'cogo-toast';
import i18n from "i18next";

const options = {
  position: 'bottom-right',
  hideAfter: 3
};

export const notify = {
  cart: {
    add: ({quantityStep, name, unitPrice}) => {
      cogoToast.success(`${quantityStep}x ${name} +${unitPrice.toFixed(2)}`, {...options, heading: i18n.t("cart.added")})
    },
  },
  newsletter: {
    add: (code) => {
        const { hide } = cogoToast.success(
            i18n.t("newsletter.subscribed", {code: code, discount: "10%"}),
            {
                ...options,
                hideAfter: 0,
                heading: 'Subscribed!',
                onClick: () => hide(),
            }
        )
    },
    error: (messageKey) => {
      cogoToast.error(`${i18n.t(messageKey)}`, {...options, heading: 'Error'})
    },
  }
}
