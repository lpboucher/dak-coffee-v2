import React from 'react';
import { withTranslation } from 'react-i18next';

import FullImg from '../../utils/FullImg';
import PromoContent from '../../presentation/promotions/PromoContent';

import { Layer, Box, Text } from 'grommet';

const AnnouncementModal = ({close, text, t}) => {
    return (
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
    );
};

export default withTranslation()(AnnouncementModal);


