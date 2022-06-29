import { useSelector, useDispatch } from 'react-redux';

import { openMessage, closeMessage, isMessageOpen } from '../../ducks/views';

export const useMessage = () => {
  const dispatch = useDispatch();

  const open = () => dispatch(openMessage());
  const close = () => dispatch(closeMessage());

  const isOpen = useSelector(state => isMessageOpen(state));

  return {
    open,
    close,
    isOpen
  }
}
