import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { productDetailsLayout } from '../layouts/globalResponsiveLayout';

import { Heading, Tabs, Text } from 'grommet';

const ProductDetailsLayout = ({heading, subHeading, price, hasSubHeading, children, media}) => {
    const layout = productDetailsLayout(media);
    return (
        <>
            <Heading level={1} size={layout.size} margin={layout.margin}>{heading}</Heading>
            {hasSubHeading &&
                <Heading level={3} size={layout.size} margin={layout.margin}>{subHeading}</Heading>
            }
            <Text size={layout.size} margin={layout.margin} style={{fontSize: '16px'}}>{price}</Text>
            <Tabs justify="start" margin={layout.margin}>
                {children}
            </Tabs>
        </>
    );
};

export default withResponsive(ProductDetailsLayout);