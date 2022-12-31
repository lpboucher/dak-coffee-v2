import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSnipcartCart, useSnipcartEvents } from '../../hooks/utils/useSnipcart';
import { itemAdded, orderCompleted } from '../../services/eventTracking';
import { initializeCart, updateCart, updatingCart, clearCart, createShippingLabel } from '../../ducks/cart';
import { schemaBuilder } from '../../utils/seo/schema';

import SEO from '../../utils/seo/SEO';
import BackBoneLayout from '../../layouts/Backbone';
import Header from './Header';
import HeroSlider from '../../components/HeroSlider';
import AboutSlider from '../../components/About/AboutSlider';
import SustainabilitySlider from '../../components/Sustainability/SustainabilitySlider';
import Intro from '../../components/About/Intro';
import Newsletter from '../Newsletter';
import Footer from './Footer';
import AnnouncementModal from '../../components/Backbone/AnnouncementModal';
import MessageModal from '../../components/Backbone/MessageModal';
import CartReview from '../../components/Backbone/CartReview';
import MobileMenu from '../../components/Backbone/MobileMenu';

const BackBone = ({children}) => {
  const schema = schemaBuilder('WebSite', 'https://dakcoffeeroasters.com');

  useSnipcartCart(initializeCart);

  useSnipcartEvents(
    updatingCart,
    updateCart,
    clearCart,
    itemAdded,
    orderCompleted,
    createShippingLabel,
  );
  const { pathname } = useLocation();

  const pageHeader = {
    "/": <>
          <Header isTransparent />
          <HeroSlider />
        </>,
    "/about": <>
                <Header isTransparent />
                <AboutSlider />
                <Intro />
              </>,
    "/sustainability": <>
                <Header isTransparent />
                <SustainabilitySlider />
                <Intro />
            </>
  };
  const defaultHeader = <Header isTransparent={false}/>;

  return (
    <>
      <SEO
        title={'Specialty coffee, roasted in Amsterdam - Dak Coffee Roasters'}
        description={'Order or subscribe to premium varieties of high quality specialty coffee delivered right to your door'}
        keywords={['coffee', 'coffee beans']}
        schema={schema}
      />
      <BackBoneLayout
        header={pageHeader[pathname] || defaultHeader}
        main={children}
        footer={[
          <Newsletter type={pathname === "/subscribe" ? "full" : null}/>,
          <Footer/>
        ]}
        layers={[
          <CartReview key="cart" />,
          <AnnouncementModal key="modal" />,
          <MessageModal key="message" />,
          <MobileMenu key="mobileMenu" />
        ]}
        withBasePadding={pathname !== "/about"}
      />
    </>
  )
}


export default BackBone;
