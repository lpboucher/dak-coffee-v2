import React from 'react';

import ProductSpecsLayout from '../../layouts/ProductSpecsLayout';

import { ReactComponent as Leaf} from '../../../assets/icons/noun_Coffee Leaf_1888198.svg';
import { ReactComponent as Bean} from '../../../assets/icons/coffeebean.svg';
import { ReactComponent as Tasting} from '../../../assets/icons/tastingnotes.svg';
import { ReactComponent as Altitude} from '../../../assets/icons/altitude.svg';
import { ReactComponent as Packaging} from '../../../assets/icons/packaging.svg';

const ProductSpecs = ({recommendation, process, harvest ,altitude, tasting_notes, recyclable}) => {
    return (
        <ProductSpecsLayout
            specs={[
                {isMain: true, icon: <Leaf width="36px" />, description: harvest},
                {isMain: false, icon: <Bean height="36px" />, description: `${process}`},
                {isMain: false, icon: <Altitude width="36px" />, description: `${altitude}`},
                {isMain: false, icon: <Tasting width="36px" />, description: tasting_notes},
                {isMain: false, icon: <Packaging width="36px" />, description: recyclable}
            ]}
        />
    );
};

export default ProductSpecs;
