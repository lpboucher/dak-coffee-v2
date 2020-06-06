import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal, isModalOpen } from '../../../../ducks/views';

const ModalContainer = ({renderModal}) => {
  const dispatch = useDispatch();

  const open = () => dispatch(openModal());
  const close = () => dispatch(closeModal());

  const isOpen = useSelector(state => isModalOpen(state));

  return renderModal({open, close, isOpen})
}

export default ModalContainer;

