import React from 'react';
import styled from 'styled-components';

import { Box, Heading, Button } from 'grommet';

import {layout} from '../../../../layout';
import SimpleDropdown from '../../../components/Share/Dropdowns/Simple';
import IconedDropdown from '../../../components/Share/Dropdowns/Iconed';

import { ReactComponent as Bean} from '../../../../assets/icons/coffeebean.svg';
import { ReactComponent as Altitude} from '../../../../assets/icons/altitude.svg';
import { ReactComponent as Packaging} from '../../../../assets/icons/packaging.svg';

export const AddButton = styled(Button)`
  border-radius: 0;
`

export const PriceBox = styled(Box)`
  width: 30%;
  margin-left: 1px;
`

const ProductDetailsLayout = ({
  title,
  staticPrice,
  description,
  mainDropdown,
  characteristics,
  more,
  hasProductOptions,
  form
}) => {
    return (
    <Box fill>
      <Heading level={1}>{title}</Heading>
      <Heading level={3}>{staticPrice}</Heading>
      <Heading level={5}>{description}</Heading>
      {form}
      <Box pad="small">
        <SimpleDropdown
          title={hasProductOptions ? "Tasting Notes" : "Product Information"}
          text={mainDropdown}
        />
      </Box>
      <Box pad="small">
        <IconedDropdown
          title="Characteristics"
          elements={[
            { icon: <Bean width="36px" />, text: "test 1" },
            { icon: <Altitude width="36px" />, text: "test 2" },
            {icon: <Packaging width="36px" />, text: "test 3" },
          ]} />
      </Box>
      <Box pad="small">
        <SimpleDropdown title="Ream More about this coffee" text="This coffee bla bla bla" />
      </Box>
    </Box>
    );
};

export default ProductDetailsLayout;
