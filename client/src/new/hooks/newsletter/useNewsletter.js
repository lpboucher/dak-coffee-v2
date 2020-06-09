import { useDispatch, useSelector } from "react-redux"

import { addToNewsletter } from '../../../ducks/user';
import { getError } from '../../../ducks/views';

export const useNewsletter = () => {
  const dispatch = useDispatch();

  const error = useSelector(state => getError(state));

  const add = (name, email) => dispatch(addToNewsletter(name, email));

  return {
    add,
    error,
  }
}
