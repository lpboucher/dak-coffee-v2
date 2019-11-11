import React from 'react';

import ProductSpecsLayout from '../../layouts/ProductSpecsLayout';

import { ReactComponent as Leaf} from '../../../assets/icons/noun_Coffee Leaf_1888198.svg';
import { ReactComponent as Bean} from '../../../assets/icons/noun_Coffee Bean_2443900.svg';
import { ReactComponent as Steam} from '../../../assets/icons/noun_Steam_795410.svg';
import { ReactComponent as Cup} from '../../../assets/icons/iconmonstr-coffee-8.svg';
import { ReactComponent as Tag} from '../../../assets/icons/iconmonstr-tag-2.svg';

const ProductSpecs = ({recommendation, process, harvest ,altitude, tasting_notes, recyclable}) => {
    return (
        <ProductSpecsLayout
            specs={[
                {isMain: true, icon: <Leaf width="36px" />, description: harvest},
                {isMain: false, icon: <Bean height="36px" />, description: `${process}, ${altitude}`},
                {isMain: false, icon: <Cup width="36px" />, description: recommendation},
                {isMain: false, icon: <Steam width="36px" />, description: tasting_notes},
                {isMain: false, icon: <Tag width="36px" />, description: recyclable}
            ]}
        />
    );
};

export default ProductSpecs;