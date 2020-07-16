import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import CoffeeCardContainer from '../containers/products/CoffeeCardContainer';
//import ProductSlider from './new/ProductsSliderLayout';

import { Box } from 'grommet';

import { coffeeRowLayout } from './globalResponsiveLayout';

const CoffeeRow = ({coffees, media, t}) => {
    const layout = coffeeRowLayout(media);
    // prod
    const selectedCoffees = ["5f10320f3a971a1ed112384c", "5e5bc28f43c13f731d449d59", "5ef464093a971a1ed1123848", "5ea7e695cf10706017c4e39f"];
    // dev
    // const selectedCoffees =  ["5db9a0a0ab6bee8d8e4e3902", "5db9a240646d6f8e7d7f3813", "5db9a46f4440f38ecc4c362a", "5db9a56a4440f38ecc4c362b"];
    //const filteredCoffees = coffees.filter(coffee => selectedCoffees.indexOf(coffee) !== -1);
    return (
    <Box pad={layout.pad} direction="row" justify="between" background="mainWhite" wrap>
        {selectedCoffees.map(id => (
        <Box key={id} width={layout.itemWidth}>
            <CoffeeCardContainer id={id}/>
        </Box>
        ))}
    </Box>
    /*<ProductSlider
      slides={
        [...coffees, ...coffees].map(id => (
          <Box key={id} width={layout.itemWidth}>
              <CoffeeCardContainer id={id}/>
          </Box>
          ))
      }
    >
  </ProductSlider>*/
    );
};

export default withTranslation()(withResponsive(CoffeeRow));
