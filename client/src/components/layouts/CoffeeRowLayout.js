import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import CoffeeCardContainer from '../containers/products/CoffeeCardContainer';

import { Box } from 'grommet';

//import { productGridLayout } from './globalResponsiveLayout';

const CoffeeRow = ({coffees, media, t}) => {
    //const layout = productGridLayout(media)
    return (
    <Box pad="large" direction="row" background="mainWhite"> 
        {coffees.map(id => (
            <CoffeeCardContainer key={id} id={id}/>
        ))}
    </Box> 
    );
};

export default withTranslation()(withResponsive(CoffeeRow));