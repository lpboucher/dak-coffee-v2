import React from 'react';
import styled from 'styled-components';

import CardHover from '../../utils/new/CardHover';
import { Box} from 'grommet';

const LabelContainer = styled(Box)`
  position: relative;

  & div:nth-child(2) {
    position: absolute;
  }
`

const CardLabelLayout = ({productInfo, callToAction}) => {
    return (
        <LabelContainer height="100%" width="100%" direction="row" align="center" justify="around">
          <CardHover>
            {productInfo}
          </CardHover>
          {callToAction}
        </LabelContainer>
    );
};

export default CardLabelLayout;
