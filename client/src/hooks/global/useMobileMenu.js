import { useSelector, useDispatch } from 'react-redux';

import { openMobileMenu, closeMobileMenu, isMobileOpen } from '../../ducks/views';

export const useMobileMenu = () => {
  const dispatch = useDispatch();

  const open = () => dispatch(openMobileMenu());
  const close = () => dispatch(closeMobileMenu());

  const isOpen = useSelector(state => isMobileOpen(state));

  return {
    setOpen: open,
    setClose: close,
    isOpen
  }
}
