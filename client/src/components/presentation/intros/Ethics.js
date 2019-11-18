import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const ethics = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1574085323/Intros/Ourcoffee_c8d7oa.jpg';


const Ethics = () => {
    const intro = 
        <IntroLayout 
            heading="intros.ethics.title" 
            description="intros.ethics.description"
        />
    return (
        <TwoColLayout 
            bgColor="lightGrey"
            left={<FullImg imgLink={ethics}/>}
            right={intro}
        />
    );
};

export default Ethics;