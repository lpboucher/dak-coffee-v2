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
            onTouchStart={() => history.push('/cart')}
            aria-controls="example-collapse-text"
            aria-expanded={isOpen}
            style={{width: '40px'}}
            ref={anchor}
        >
            {!isMobile ?
                <Stack anchor="right" fill>
                    {icon}
                    {quantity}
                </Stack>
                :
                <Link to="/cart">
                    {icon}
                </Link>
            }
            {isOpen && tooltip
            }
        </div>
    );
};

export default withRouter(withResponsive(CartIconLayout));