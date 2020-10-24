import React from 'react';
import styled from 'styled-components';

import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box, Heading } from 'grommet';

import { layout } from '../../../../layout';

const {
  categoryFontSize,
  sectionPadding
} = layout;

const CappedHeading = styled(Heading)`
  text-transform: uppercase;
`;

const ProductsListingLayout = ({children, moreButton, showMore, heading}) => {
  const { mediaType, greaterThan } = useResponsive();
    return (
    <Box
      background="mainWhite"
      pad={{vertical: greaterThan.small ? sectionPadding : "none"}}
      >
        {heading &&
          <Box pad={{bottom: sectionPadding}} margin={{horizontal: 'auto'}}>
            <CappedHeading level={1} size={layout[`categoryFontSize_${mediaType}`] || categoryFontSize} responsive={false}>{heading}</CappedHeading>
          </Box>
        }
        <Box
          direction="row"
          wrap
        >
          {children}
        </Box>
        {showMore &&
        <Box margin={{horizontal: 'auto', vertical: '40px'}}>
          {moreButton}
        </Box>
        }
    </Box>
    );
};

export default ProductsListingLayout;
