import React from 'react';

import OutOfStock from '../../../utils/OutOfStock';
import { ReactComponent as SoldOut } from '../../../../assets/icons/soldout.svg';

import { Box, Image } from 'grommet';


import { buildImageUrl } from '../../../utils/Images/generateImage';

const ProductFeature = ({name, thumb_image, stock}) => {
    const imageSRC = buildImageUrl(`Products/Thumbs/${thumb_image}`, 'f_auto,q_auto');
    const outOfStock = stock < 1;
    return (
      <>
        <Image fit="contain" src={imageSRC} alt={`${name}`}/>
        {outOfStock &&
            <OutOfStock>
                <Box align="start" pad="small">
                    <SoldOut height="48px" />
                </Box>
            </OutOfStock>
        }
      </>
    );
}

export default ProductFeature;


