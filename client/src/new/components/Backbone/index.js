import React from 'react';
import { useSnipcartCart, useSnipcartEvents } from '../../hooks/utils/useSnipcart';
import { itemAdded, orderCompleted } from '../../services/eventTracking';
import { initializeCart, updateCart, updatingCart, clearCart } from '../../../ducks/cart';
import { schemaBuilder } from '../../utils/seo/schema';

import 'react-toastify/dist/ReactToastify.min.css';

import SEO from '../../utils/seo/SEO';
import BackBoneLayout from '../../layouts/Backbone';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import AnnouncementModal from '../../components/Backbone/AnnouncementModal';
import CartReview from '../../components/Backbone/CartReview';

const BackBone = ({children}) => {
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
      <BackBoneLayout
        header={<Header />}
        metas={[
          <ToastContainer key="notification" position="bottom-right" />
        ]}
        main={children}
        footer={<Footer />}
        layers={[
          <CartReview key="cart" />,
          <AnnouncementModal key="modal" />
        ]}
      />
    </>
  )
}


export default BackBone;
