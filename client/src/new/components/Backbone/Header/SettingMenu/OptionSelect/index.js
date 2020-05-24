import React from 'react';

import OptionSelectLayout from '../../../../../layouts/Backbone/Header/SettingMenu/OptionSelect';

const OptionSelect = ({switchOption, activeOption, options}) => {
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
