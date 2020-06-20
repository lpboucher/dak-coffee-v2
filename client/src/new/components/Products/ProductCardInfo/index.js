import React from 'react';
import styled from 'styled-components';

import { Box, Text } from 'grommet';
import { Add } from 'grommet-icons';
import Skeleton from 'react-loading-skeleton';
import ClipLoader from 'react-spinners/ClipLoader';

import AddToCart from '../../../components/Cart/AddProduct';

const TruncateText = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    flex-grow:1;
`

const FixedText = styled(Text)`
  width: 100px;
`

const AddBox = styled(Box)`
  cursor: pointer;
  text-transform: uppercase;
   &:hover {
     background: lightgrey;
   }
`

const ProductCardInfo = ({id, adding, displayedPrice, title, subTitle, helper}) => {
    return (
        <>
          <Box direction="row" justify="between">
            <TruncateText textAlign="start" size="medium" weight="bold" >
              {title || <Skeleton />}
            </TruncateText>
            <FixedText textAlign="end">{displayedPrice}</FixedText>
          </Box>
          <Box direction="row" align="center" justify="between">
            <Box>
              <TruncateText textAlign="start" size="small" color="grey">
                {subTitle || <Skeleton />}
              </TruncateText>
              <Text textAlign="start" weight="bold" size="xsmall" color="mainDark">
                {helper}
              </Text>
            </Box>
            <AddToCart
              productId={id}
              addButton={
              <AddBox background="mainDark" pad="xsmall" align="center" margin={{vertical: "small"}} round="xsmall">
                {adding ?
                  <ClipLoader size={12} color="white"/>
                  :
                  <Add size="small" />
                }
              </AddBox>}
            />
          </Box>
        </>
    );
};

export default ProductCardInfo;
