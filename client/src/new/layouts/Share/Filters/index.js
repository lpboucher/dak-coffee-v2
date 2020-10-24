import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box } from 'grommet';

import { layout } from '../../../../layout';

const {
  filterWidth
} = layout;

export const OneCategory = styled(Box)`
  text-transform: uppercase;
  font-size: 10px;
  border-bottom: 1px solid ${({selected}) => selected ? 'black' : 'white'};
  &:hover {
    border-bottom-color: black;
  }
`

const FilterHolder = styled(Box)`
  max-width: ${({screenSize}) => layout[`filterWidth_${screenSize}`] || filterWidth};
  margin: auto;
`

const FiltersLayout = ({children}) => {
  const { mediaType } = useResponsive();
  return (
    <FilterHolder screenSize={mediaType} direction="row" justify="center" pad="small" wrap>
      {children}
    </FilterHolder>
  );
};

export default FiltersLayout;
