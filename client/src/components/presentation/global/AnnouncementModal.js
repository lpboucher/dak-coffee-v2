import React from 'react';
import withResponsive from '../../HOCs/withResponsive';

import FullImg from '../../utils/FullImg';
import PromoContent from '../../presentation/promotions/PromoContent';

import { Layer, Box } from 'grommet';

const AnnouncementModal = ({close, media}) => {
    const isMobile = media === "extraSmall" || media === "small";
    return (
    <>
    {!isMobile &&
        <Layer onEsc={() => close()} onClickOutside={() => close()} modal position="center">
            <Box width={'600px'} direction='row' wrap>
                <Box width={'50%'}>
                    <FullImg imgLink={'https://res.cloudinary.com/dak-coffee-roasters/image/upload/dpr_2.0/v1574086663/Intros/promorutabo_jbpoie.jpg'} size={'cover'}/>
                </Box>
                <Box width={'50%'}>
                    <PromoContent close={close}/>
                </Box>
            </Box>
        </Layer>
    }
    </>
    );
};

export default withResponsive(AnnouncementModal);


