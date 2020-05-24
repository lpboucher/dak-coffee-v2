import React from 'react';

import 'react-toastify/dist/ReactToastify.min.css';

import BackBoneLayout from '../../layouts/Backbone';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import CartReviewContainer from '../../containers/Backbone/CartReview'


const BackBone = ({mainContent}) => (
    <BackBoneLayout
      header={<Header />}
      metas={[
        <ToastContainer key="notification" position="bottom-right" />
      ]}
      main={mainContent}
      footer={<Footer />}
      layers={[
        <CartReviewContainer key="cartReview"/>
      ]}
    />
)


export default BackBone;

