import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const coffee = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1572969989/Intros/BelieveinV2_cysbar.jpg';

const CoffeeIntro = () => {
    const intro = 
        <IntroLayout 
        heading="intros.coffee.title" 
        description="intros.coffee.description"
        />
    return (
        <TwoColLayout 
            bgColor="mainWhite"
            right={<FullImg imgLink={coffee}/>}
            left={intro}
        />
    );
};

export default CoffeeIntro;