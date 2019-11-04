import React from 'react';
import withResponsive from '../HOCs/withResponsive';

//import CartItem from './CartItem';
//import CartHeading from './CartHeading';

import { Box } from 'grommet';

/*import OrderPromoCode from './OrderPromoCode';
import OrderSummaryPrices from './OrderSummaryPrices';*/

import { cartLayout } from './globalResponsiveLayout';

const Cart = ({children, media}) => {
    const layout = cartLayout(media);
    const isNotSmall = (media === "medium" || media === "large" || media === "infinity");
    return (
        <Box pad={layout.pad}>
            {//isNotSmall && <CartHeading />
            }
            {children.map(item => item)}
            {/*<Box direction={layout.dir} justify="between" pad={{vertical: "medium"}} wrap>
                <Box width={layout.width}>
                    <OrderPromoCode promoError={error.promo} apply={apply}/>
                </Box>
                <Box align="end">
                    <OrderSummaryPrices withButton={true} {...cart}/>
                </Box>
    </Box>*/}
        </Box>
    );
};

export default withResponsive(Cart);