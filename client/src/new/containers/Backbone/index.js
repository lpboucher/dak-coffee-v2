import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openPromotion } from '../../../ducks/views';
import { initializeCart } from '../../../ducks/cart';
import { schemaBuilder } from '../../../components/utils/SEO/schema';

import SEO from '../../../components/utils/SEO/SEO';

import BackBone from '../../components/Backbone';

const BackBoneContainer = ({children}) => {
  const schema = schemaBuilder('WebSite', 'https://dakcoffeeroasters.com');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCart());
    //toast.success("Wow so easy !");
    setTimeout(() => openPromotion(), 5000);
  }, [dispatch]);

  useEffect(() => {
    return () => {
      if( navigator.userAgent !== 'ReactSnap') {
        window.Snipcart.unsubscribe('cart.ready');
      }
    }
  }, []);

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

