import { useDispatch, useSelector } from "react-redux"

import { isCheckingLoginStatus } from '../../../ducks/views';
import { getLoggedInStatus, logout } from '../../../ducks/user';

export const useLogIn = () => {
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => getLoggedInStatus(state));
  const isStatusChanging = useSelector(state => isCheckingLoginStatus(state));

  const onLogOut = () => dispatch(logout());

  return {
    isLoggedIn,
    isStatusChanging,
    logout: onLogOut
  }
}
