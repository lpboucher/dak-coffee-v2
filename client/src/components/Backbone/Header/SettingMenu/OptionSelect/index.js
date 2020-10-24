import React from 'react';
import { useMenuOptions } from '../../../../../hooks/global/useMenuOptions';

import OptionSelectLayout from '../../../../../layouts/Backbone/Header/SettingMenu/OptionSelect';

const OptionSelect = ({optionType}) => {
  const { activeOption, switchOption, options } = useMenuOptions(optionType);
  const allItems = options.map(option => ({...option, onClick: () => switchOption(option.key) }));
  const otherItems = allItems.filter(option => option.key !== activeOption);
  const current = options.find(opt => opt.key === activeOption)
  return (
      <OptionSelectLayout
        activeOption={current ? current.label : activeOption}
        otherOptions={otherItems}
      />
  );
};

export default OptionSelect;
