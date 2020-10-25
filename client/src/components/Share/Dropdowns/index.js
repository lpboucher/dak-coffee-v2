import React from 'react';

import DropDownLayout from '../../../layouts/Share/DropDown';
import IconedDropdown from '../../../components/Share/Dropdowns/Iconed';
import SimpleDropdown from '../../../components/Share/Dropdowns/Simple';

const DropDown = ({dropdowns}) => {
  const accordions = dropdowns.map((oneDropdown) => {
    return {
      title: oneDropdown.title,
      content: oneDropdown.type === "iconed" ?
        <IconedDropdown
          elements={oneDropdown.content}
          panelDirection={oneDropdown.direction ? oneDropdown.direction : "column"}
        />
        :
        <SimpleDropdown text={oneDropdown.content} />,
    }
  })
  return (
    <DropDownLayout
      accordions={accordions}
    />
  );
};

export default DropDown;
