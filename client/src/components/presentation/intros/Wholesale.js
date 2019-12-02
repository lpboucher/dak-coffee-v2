import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const wholesale = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1566036472/Intros/Wholesale_jzdvmw.jpg';

const Wholesale = () => {
    const intro = 
        <IntroLayout 
        heading="intros.wholesale.title"
        description="intros.wholesale.description"
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={wholesale}/>}
            right={intro}
        />
    );
};

export default Wholesale;