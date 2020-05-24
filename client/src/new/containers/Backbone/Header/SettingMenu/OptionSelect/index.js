import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchOption, getActiveOption } from '../../../../../../ducks/views';

import OptionSelect from '../../../../../components/Backbone/Header/SettingMenu/OptionSelect';

import { MENU_OPTIONS } from '../../../../../constants/navigation';

const OptionSelectContainer = ({optionType}) => {
  const activeOption = useSelector(state => getActiveOption(state, optionType));
  const dispatch = useDispatch();
  const changeActiveOption = (optionKey) => dispatch(switchOption(optionType, optionKey));
  return (
    <OptionSelect
      options={MENU_OPTIONS[optionType]}
      activeOption={activeOption}
      switchOption={changeActiveOption}
    />
  );
};

export default OptionSelectContainer;
