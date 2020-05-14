import React from 'react';

import 'react-toastify/dist/ReactToastify.min.css';

import BackBoneLayout from '../../layouts/Backbone';
import Header from './Header';
import Footer from './Footer';


const BackBone = ({mainContent}) => (
    <BackBoneLayout
      header={<Header />}
      main={mainContent}
      footer={<Footer />}
    />
)


export default BackBone;

