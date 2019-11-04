import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';

import { Drop, Box, Text } from 'grommet';

const CartSummaryLayout = withRouter(({children, close, anchor, t}) => {
    return (
        <Drop align={{"top": "bottom", "right": "right"}} plain={true} target={anchor.current} onClickOutside={close} onEsc={close}>
            <Box width="400px" background='mainWhite' justify="between">
                <Box border fill="horizontal" pad={{top: 'small'}}>
                    {children && children.length > 0 ? children.map(item => 
                            item
                    ) : 
                        <Text textAlign="center">{t("cart.empty")}</Text>
                    }
                </Box>
                <Box direction="row" fill="horizontal">
                    <Link to="/cart" style={{width: '50%'}}>
                        <Box fill align="center" pad="small" background="mainDark" margin={{right: '1px'}}>
                            <Text color="mainWhite">{t("cart.to cart")}</Text>
                        </Box>
                    </Link>
                    <Link to="#" className="snipcart-checkout" style={{width: '50%'}}>
                        <Box fill align="center" pad="small" background="mainDark" margin={{left: '1px'}}>
                            <Text color="mainWhite">{t("cart.to checkout")}</Text>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Drop>
    );
})

export default withTranslation()(CartSummaryLayout);