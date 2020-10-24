import { useSelector, useDispatch } from 'react-redux';

import { openModal, closeModal, isModalOpen } from '../../ducks/views';

export const useModal = () => {
  const dispatch = useDispatch();

  const open = () => dispatch(openModal());
  const close = () => dispatch(closeModal());

  const isOpen = useSelector(state => isModalOpen(state));

  return {
    open,
    close,
    isOpen
  }
}
