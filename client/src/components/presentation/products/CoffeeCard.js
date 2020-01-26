import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import CoffeeCardInfo from './CoffeeCardInfo';
import OutOfStock from '../../utils/OutOfStock';
import { ReactComponent as SoldOut } from '../../../assets/icons/soldout.svg';

import { Box, Image } from 'grommet';
import { CardHover } from './CoffeeCardInfo';

import { buildImageUrl } from '../../utils/Images/generateImage';

const WithHover = styled(Box)`
    cursor: pointer;
    &:hover ${CardHover} {
        border-top: 5px solid #444444;
        margin: 8px 12px 12px 12px;
    }
`

const CoffeeCard = withRouter(({id, name, slug, type, thumb_image, price, stock, currency, history}) => {
    const imageSRC = buildImageUrl(`Products/Thumbs/${thumb_image}`, 'f_auto,q_auto');
    const outOfStock = stock < 1;
    return (
        <WithHover height="400px" width="100%" >
            <Box height="75%" onClick={() => !outOfStock ? history.push(`/shop/${slug}`) : null} isHoverable={!outOfStock}>
                <Image fit="contain" src={imageSRC} alt={`${name}`}/>
                {outOfStock &&
                    <OutOfStock fill>
                        <Box align="start" pad="small">
                            <SoldOut height="48px" />
                        </Box>
                    </OutOfStock>
                }
            </Box>
            <Box>
                <CoffeeCardInfo 
                    id={id}
                    slug={slug}
                    type={type}
                    price={price}
                    currency={currency}
                />
            </Box>   
        </WithHover>
    );
})

export default CoffeeCard;


