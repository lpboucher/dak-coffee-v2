import React from 'react';
import { withRouter } from 'react-router-dom';

import CoffeeCardInfo from './CoffeeCardInfo';
import WithHover from '../../utils/WithHover';
import OutOfStock from '../../utils/OutOfStock';
import { ReactComponent as SoldOut } from '../../../assets/icons/soldout.svg';

import { Box, Image } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

const CoffeeCard = withRouter(({id, name, slug, type, thumb_image, price, stock, currency, history}) => {
    const imageSRC = buildImageUrl(`Products/Thumbs/${thumb_image}`, 'f_auto,q_auto');
    const outOfStock = stock < 1;
    return (
        <Box height="400px">
            <WithHover height="75%" onClick={() => !outOfStock ? history.push(`/shop/${slug}`) : null} isHoverable={!outOfStock}>
                <Image fit="contain" src={imageSRC} alt={`${name}`}/>
                {outOfStock &&
                    <OutOfStock fill>
                        <Box align="start" pad="small">
                            <SoldOut height="48px" />
                        </Box>
                    </OutOfStock>
                }
            </WithHover>
            <Box height="25%">
                <CoffeeCardInfo 
                    id={id}
                    slug={slug}
                    type={type}
                    price={price}
                    currency={currency}
                />
            </Box>   
        </Box>
    );
})

export default CoffeeCard;


