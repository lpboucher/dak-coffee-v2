import { useSelector, useDispatch } from 'react-redux';

import { switchOption, getActiveOption } from '../../../ducks/views';

import { MENU_OPTIONS } from '../../constants/navigation';

export const useMenuOptions = (optionType) => {
  const dispatch = useDispatch();

  const activeOption = useSelector(state => getActiveOption(state, optionType));

  const changeActiveOption = (optionKey) => dispatch(switchOption(optionType, optionKey));

  const options = MENU_OPTIONS[optionType]

  return {
    activeOption,
    switchOption: changeActiveOption,
    options
  }
}
