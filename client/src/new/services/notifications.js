import cogoToast from 'cogo-toast';

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
  error: {
    global: ""
  }
}
