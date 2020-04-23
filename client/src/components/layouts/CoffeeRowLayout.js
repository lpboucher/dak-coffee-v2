import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import CoffeeCardContainer from '../containers/products/CoffeeCardContainer';

import { Box } from 'grommet';

import { coffeeRowLayout } from './globalResponsiveLayout';

const CoffeeRow = ({coffees, media, t}) => {
    const layout = coffeeRowLayout(media);
    const selectedCoffees = ["5e9da8381a71db29edc10ee1", "5e5fb5cf43c13f731d449d5b", "5e2f3f8f67724418d2e2df99", "5db9a56a4440f38ecc4c362b"];
    // const selectedCoffees =  ["5db9a0a0ab6bee8d8e4e3902", "5db9a240646d6f8e7d7f3813", "5db9a46f4440f38ecc4c362a", "5db9a56a4440f38ecc4c362b"];
    const filteredCoffees = coffees.filter(coffee => selectedCoffees.indexOf(coffee) !== -1);
    return (
    <Box pad={layout.pad} direction="row" justify="between" background="mainWhite" wrap>
        {filteredCoffees.map(id => (
        <Box key={id} width={layout.itemWidth}>
            <CoffeeCardContainer id={id}/>
        </Box>
        ))}
    </Box>
    );
};

export default withTranslation()(withResponsive(CoffeeRow));
