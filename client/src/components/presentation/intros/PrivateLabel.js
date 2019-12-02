import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const privatelabel = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1565720115/Intros/Privatelabel_bh1cd6.jpg';

const PrivateLabelIntro = () => {
    const intro = 
        <IntroLayout 
            heading="intros.private label.title"
            description="intros.private label.description"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            right={<FullImg imgLink={privatelabel}/>}
            left={intro}
        />
    );
};

export default PrivateLabelIntro;