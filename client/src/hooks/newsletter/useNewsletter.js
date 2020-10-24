import { useDispatch, useSelector } from "react-redux"

import { addToNewsletter } from '../../ducks/user';
import { isProcessing } from '../../ducks/views';

export const useNewsletter = () => {
  const dispatch = useDispatch();

  const processing = useSelector(state => isProcessing(state));

  const add = (name, email) => dispatch(addToNewsletter(name, email));

  return {
    add,
    isProcessing: processing,
  }
}
