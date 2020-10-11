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
    const selectedCoffees = ["5f4e31d34205fd6fd7210fa0", "5ef464093a971a1ed1123848", "5f82d7b5fa3f701609676ae7", "5f82d928fa3f701609676ae9"];
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
