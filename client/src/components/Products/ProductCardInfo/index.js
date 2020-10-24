import React from 'react';
import styled from 'styled-components';

import { Box, Text } from 'grommet';
import Skeleton from 'react-loading-skeleton';
import ClipLoader from 'react-spinners/ClipLoader';

import AddToCart from '../../../components/Cart/AddProduct';

import Cart from "../../../utils/icons/Cart";

const TruncateText = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-transform: inherit;
    flex-grow:1;
`

const FixedText = styled(Text)`
  width: 100px;
`

const AddBox = styled(Box)`
  cursor: pointer;
  border-radius: 3px;
  text-transform: uppercase;
  background: ${({theme}) => theme.global.colors.mainDark};
   &:hover {
     background: ${({theme}) => theme.global.colors.primary};
   }
`

const ProductCardInfo = ({id, adding, displayedPrice, title, subTitle, helper, selected}) => {
    return (
        <>
          <Box direction="row" justify="between">
            <TruncateText textAlign="start" weight="bold" >
              {title || <Skeleton />}
            </TruncateText>
            <FixedText textAlign="end">{displayedPrice}</FixedText>
          </Box>
          <Box direction="row" align="center" justify="between">
            <Box>
              <TruncateText textAlign="start" size="small">
                {helper || <Skeleton />}
              </TruncateText>
              <TruncateText textAlign="start" weight="bold" size="xsmall">
                {subTitle}
              </TruncateText>
            </Box>
            <AddToCart
              productId={id}
              selected={selected}
              addButton={
              <AddBox direction="row" pad={{vertical: "6px", horizontal: "12px"}} align="center" margin={{vertical: "small"}} round="xsmall">
                {adding ?
                    <ClipLoader size={20} color="white"/>
                  :
                    <Cart height="20" width="20" color="#ffffff" />
                }
              </AddBox>}
            />
          </Box>
        </>
    );
};

export default ProductCardInfo;
