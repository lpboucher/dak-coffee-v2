import React from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';
import { Link } from 'react-router-dom';

import ProductCardContainer from '../containers/products/ProductCardContainer';

import { Grid, Box, Heading, Button } from 'grommet';

import { productGridLayout } from './globalResponsiveLayout';

const ProductGrid = ({products, media, t}) => {
    const layout = productGridLayout(media)
    return (
    <Box pad="large" background={layout.background}>
        <Link to="/shop" style={{textAlign: 'center'}}>
            <Heading level='1' size={layout.size} textAlign="center">{t("sections.featured.title")}</Heading>
        </Link>
        <Grid
            columns={layout.columns}
            rows={layout.rows}
            gap='medium'
            margin="medium"
            areas={layout.areas}
        >
        {products.map((id, index) => (
            <Box key={id}
                gridArea={index === 0 ? "main" : `product${index}`}
                background="mainWhite"
            >
                <ProductCardContainer id={id}/>
            </Box>
        ))}
        </Grid>
        <Link to="/shop" style={{textAlign: 'center'}}>
            <Button primary label={t("sections.featured.button")} alignSelf="center"></Button>
        </Link>
    </Box>
    );
};

export default withTranslation()(withResponsive(ProductGrid));
