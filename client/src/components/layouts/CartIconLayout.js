import React from 'react';
import { Link } from 'react-router-dom';
import withResponsive from '../HOCs/withResponsive';
import { withRouter } from 'react-router-dom';

import { Stack } from 'grommet';

const CartIconLayout = ({anchor, open, close, isOpen, quantity, icon, tooltip, media, history}) => {
    const isMobile = media === "extraSmall" || media === "small";
    return (
        <div
            onMouseEnter={!isMobile ? open : null}
            onMouseLeave={!isMobile ? close : null}
            aria-controls="example-collapse-text"
            aria-expanded={isOpen}
            style={{width: '40px', lineHeight: '20px', margin: '0 20px'}}
            ref={anchor}
            className={"snipcart-checkout"}
        >
            {!isMobile ?
                <Stack anchor="right" fill>
                    {icon}
                    {quantity}
                </Stack>
                :
                    icon
            }
            {isOpen && tooltip
            }
        </div>
    );
};

export default withRouter(withResponsive(CartIconLayout));