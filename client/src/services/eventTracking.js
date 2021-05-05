import TagManager from 'react-gtm-module';

const createProductsFromItems = (items) => {
  return items.map(item => ({
          name: item.name,
          description: item.description,
          id: item.id,
          price: item.price,
          quantity: item.quantity
    }))
}

export const itemAdded = (item) => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'snipcartEvent',
      eventCategory: 'Cart Update',
      eventAction: 'New Item Added To Cart',
      eventLabel: item.name,
      eventValue: item.price,
      ecommerce: {
          add: {
              products: createProductsFromItems([item])
          }
      }
    }
  });
}

export const cartOpened = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'snipcartEvent',
      eventCategory: 'Cart Action',
      eventAction: 'Cart Opened',
      ecommerce: {
          cartopen: {
              products: createProductsFromItems(window.Snipcart.store.getState().cart.items)
          }
      }
    }
  });
}

export const orderCompleted = (order, totalTax) => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'snipcartEvent',
      eventCategory: 'Order Update',
      eventAction: 'New Order Completed',
      ecommerce: {
          currencyCode: order.currency,
          purchase: {
              actionField: {
                  id: order.token,
                  affiliation: 'Website',
                  revenue: order.total,
                  tax: totalTax,
                  shipping: order.shippingDetails.cost,
                  invoiceNumber: order.invoiceNumber
              },
              products: createProductsFromItems(order.items.items),
              userId: order.email
          }
      }
    }
  });
}
