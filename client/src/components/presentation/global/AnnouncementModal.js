import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import FullImg from '../../utils/FullImg';
import PromoContent from '../../presentation/promotions/PromoContent';

import { Layer, Box } from 'grommet';

const AnnouncementModal = ({close, currency, media}) => {
    const isMobile = media === "extraSmall" || media === "small";
    return (
    <>
    {!isMobile &&
        <Layer onEsc={() => close()} onClickOutside={() => close()} modal position="center">
            <Box width={'600px'} direction='row' wrap>
                <Box width={'50%'}>
                    <FullImg imgLink={'https://res.cloudinary.com/dak-coffee-roasters/image/upload/c_scale,w_400/v1587393255/Intros/bagwebsite_eteg6f.jpg'} size={'cover'}/>
                </Box>
                <Box width={'50%'}>
                    <PromoContent currency={currency} close={close}/>
                </Box>
            </Box>
        </Layer>
    }
    </>
    );
};

export default withResponsive(AnnouncementModal);


