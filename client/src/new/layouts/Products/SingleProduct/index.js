import React from 'react';
import styled from 'styled-components';

import { Box } from 'grommet';

import {layout} from '../../../../layout';

const DetailsHalf = styled(Box)`
  order: ${({order, isReversed}) => !isReversed ? order : order * -1};
`;

const SingleProductLayout = ({feature, productDetails, reversed=false}) => {
    return (
    <Box direction="row" wrap>
        <DetailsHalf height="600px" width="50%" isReversed={reversed} order={1}>
          {feature}
        </DetailsHalf>
        <DetailsHalf width="50%" isReversed={reversed} order={1}>
          {productDetails}
        </DetailsHalf>
    </Box>
    );
};

export default SingleProductLayout;
