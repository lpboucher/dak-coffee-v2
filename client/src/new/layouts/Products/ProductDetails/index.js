import React from 'react';
import styled from 'styled-components';

import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box, Heading, Text, Button } from 'grommet';

import SimpleDropdown from '../../../components/Share/Dropdowns/Simple';
import IconedDropdown from '../../../components/Share/Dropdowns/Iconed';

import { layout } from '../../../../layout';

const {
  productNameFontSize,
} = layout;

export const AddButton = styled(Button)`
  border-radius: 0;
  background: ${({theme}) => theme.global.colors.primary};
  border: 2px solid ${({theme}) => theme.global.colors.primary};
  min-width: ${({width}) => width};
  padding: 5px;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 12px;

  &:hover {
    box-shadow: 0px 0px 0px 2px ${({theme}) => theme.global.colors.primary};
  }
`

export const PriceBox = styled(Box)`
  margin-left: 24px;
  border: 1px solid grey;
  background: none;
`

const DescBox = styled(Box)`
  min-height: 100px;
`

const SpacedHeading = styled(Heading)`
  letter-spacing: 1.2px;
`

const LightText = styled(Text)`
  font-weight: 400;
`

const ProductDetailsLayout = ({
  title,
  staticPrice,
  description,
  infoDropdowns,
  form
}) => {
  const { mediaType } = useResponsive();
  return (
    <Box fill>
      <DescBox pad={{horizontal: "small"}} justify="around">
        <SpacedHeading level={1} size={layout[`productNameFontSize_${mediaType}`] || productNameFontSize} responsive={false}>{title}</SpacedHeading>
        <LightText>{staticPrice}</LightText>
        <LightText>{description}</LightText>
      </DescBox>
      {form}
      <Box pad={{horizontal: "small", top: "small"}}>
        {infoDropdowns.map(oneDropdown =>
        <Box key={`${oneDropdown.type}-${oneDropdown.title}`} pad={{top: "medium"}}>
          {oneDropdown.type === "iconed" ?
          <IconedDropdown
              title={oneDropdown.title}
              elements={oneDropdown.content}
              panelDirection={oneDropdown.direction ? oneDropdown.direction : "column"}/>
          :
          <SimpleDropdown title={oneDropdown.title} text={oneDropdown.content} />
          }
        </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetailsLayout;
