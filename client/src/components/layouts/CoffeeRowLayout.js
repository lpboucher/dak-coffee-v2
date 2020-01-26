import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import CoffeeCardContainer from '../containers/products/CoffeeCardContainer';

import { Box } from 'grommet';

import { coffeeRowLayout } from './globalResponsiveLayout';

const CoffeeRow = ({coffees, media, t}) => {
    const layout = coffeeRowLayout(media)
    return (
    <Box pad="large" direction="row" justify="evenly" background="mainWhite" wrap> 
        {coffees.slice(0,4).map(id => (
        <Box key={id} width="25%">
            <CoffeeCardContainer id={id}/>
        </Box>
        ))}
    </Box> 
    );
};

export default withTranslation()(withResponsive(CoffeeRow));