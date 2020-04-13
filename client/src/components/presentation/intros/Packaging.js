import React from 'react';

import TwoColLayout from '../../layouts/TwoColLayout';
import FullImg from '../../utils/FullImg';
import IntroLayout from '../../layouts/IntroLayout';

const pack = "https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto:low/v1566244655/Intros/Ecofriendly2020_2_xlh71n.jpg";

const PackagingIntro = () => {
    const intro =
        <IntroLayout
            heading="intros.packaging.title"
            description="intros.packaging.description"
        />
    return (
        <TwoColLayout
            bgColor="lightGrey"
            left={<FullImg imgLink={pack}/>}
            right={intro}
        />
    );
};

export default PackagingIntro;
