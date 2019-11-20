import React from 'react';
import { withRouter } from 'react-router-dom';

import ProductCardInfo from './ProductCardInfo';
import WithHover from '../../utils/WithHover';
import OutOfStock from '../../utils/OutOfStock';
import { ReactComponent as SoldOut } from '../../../assets/icons/soldout.svg';

import { Box, Image } from 'grommet';

import { buildImageUrl } from '../../utils/Images/generateImage';

const ProductCard = withRouter(({id, name, slug, type, thumb_image, price, stock, currency, history}) => {
    const imageSRC = buildImageUrl(`Products/Thumbs/${thumb_image}`);
    const outOfStock = stock < 1;
    return (
        <>
            <WithHover height="75%" width="100%" onClick={() => !outOfStock ? history.push(`/shop/${slug}`) : null} isHoverable={!outOfStock}>
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
                <ProductCardInfo 
                    id={id}
                    slug={slug}
                    type={type}
                    price={price}
                    currency={currency}
                />
            </Box>      
        </>
    );
})

export default ProductCard;


