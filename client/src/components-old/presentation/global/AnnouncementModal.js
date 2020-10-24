import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import CloudImage from '../../utils/CloudImage';
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
                    <CloudImage img={`Intros/bagwebsite_eteg6f.jpg`} maxWidth={300} />
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


