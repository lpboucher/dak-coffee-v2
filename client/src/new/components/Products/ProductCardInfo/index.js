import React from 'react';
import styled from 'styled-components';

import { Text } from 'grommet';

import Skeleton from 'react-loading-skeleton';

const TruncateText = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

const ProductCardInfo = ({displayedPrice, title, subTitle, helper}) => {
    return (
        <>
          <TruncateText textAlign="start" size="medium" weight="bold" style={{textTransform: 'uppercase'}}>
            {title || <Skeleton />}
          </TruncateText>
          <TruncateText textAlign="start" size="small" color="grey">
            {subTitle || <Skeleton />}
          </TruncateText>
          <Text textAlign="start" weight="bold" size="xsmall" color="mainDark">
            {displayedPrice || <Skeleton />}
          </Text>
        </>
    );
};

export default ProductCardInfo;
