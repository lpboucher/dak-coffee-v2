import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import withResponsive from '../../HOCs/withResponsive';

import CoffeeCardInfo from './CoffeeCardInfo';
import OutOfStock from '../../utils/OutOfStock';
import { ReactComponent as SoldOut } from '../../../assets/icons/soldout.svg';

import { Box, Image } from 'grommet';
import { CardHover } from './CoffeeCardInfo';

import { buildImageUrl } from '../../utils/Images/generateImage';

import { coffeeCardLayout } from '../../layouts/globalResponsiveLayout';

const WithHover = styled(Box)`
    cursor: pointer;
    padding: 0 12px;
    &:hover ${CardHover}:before {
    border-bottom: 1px solid #a96c35;
    }
`

const CoffeeCard = withRouter(({id, name, slug, type, thumb_image, price, stock, currency, history, media}) => {
    const imageSRC = buildImageUrl(`Products/Thumbs/${thumb_image}`, 'f_auto,q_auto');
    const layout = coffeeCardLayout(media);
    const outOfStock = stock < 1;
    return (
        <WithHover height={layout.height} width="100%" >
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

export default withResponsive(CoffeeCard);


