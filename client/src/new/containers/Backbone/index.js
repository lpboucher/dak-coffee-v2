import React from 'react';
import { useSnipcartCart, useSnipcartEvents } from '../../hooks/useSnipcart';
import { itemAdded, orderCompleted } from '../../../components/utils/Tracking/snipcartEvents';
import { initializeCart, updateCart, updatingCart, clearCart } from '../../../ducks/cart';
import { schemaBuilder } from '../../../components/utils/SEO/schema';

import SEO from '../../../components/utils/SEO/SEO';

import BackBone from '../../components/Backbone';

const BackBoneContainer = ({children}) => {
  const schema = schemaBuilder('WebSite', 'https://dakcoffeeroasters.com');

  useSnipcartCart(initializeCart);

  useSnipcartEvents(
    updatingCart,
    updateCart,
    clearCart,
    itemAdded,
    orderCompleted
  );

  return (
    <>
      <SEO
          title={'Specialty coffee, roasted in Amsterdam - Dak Coffee Roasters'}
          description={'Order or subscribe to premium varieties of high quality specialty coffee delivered right to your door'}
          keywords={['coffee', 'coffee beans']}
          schema={schema}
      />
      <BackBone mainContent={children}/>
    </>
  )
}

export default BackBoneContainer;

