import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openPromotion, closePromotion, isPromoOpen } from '../../../../ducks/views';

import AnnouncementModal from '../../../components/Backbone/AnnouncementModal';

const AnnouncementModalContainer = () => {
  const dispatch = useDispatch();

  const openPromo = () => dispatch(openPromotion());
  const closePromo = () => dispatch(closePromotion());

  const isOpen = useSelector(state => isPromoOpen(state));

  return (
    <AnnouncementModal
      isOpen={isOpen}
      open={openPromo}
      close={closePromo}
    />
  )
}

export default AnnouncementModalContainer;

