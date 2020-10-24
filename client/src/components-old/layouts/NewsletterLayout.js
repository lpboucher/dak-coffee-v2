import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { Box } from 'grommet';

import { newsletterFullLayout } from '../layouts/globalResponsiveLayout';

const NewsletterSectionLayout = ({form, children, media, isFull=false}) => {
    const layout = newsletterFullLayout(media, isFull);
    return ( 
        <Box direction={layout.dir} pad={isFull ? "large" : "small"} background="mainDark" wrap>
            <Box width={layout.width} pad={isFull ? "large" : {horizontal: "small", top: "small"}}>
                {children}
            </Box>
            <Box width={layout.width} pad={isFull ? "large" : {horizontal: "small"}} wrap={isFull}>
                {form}
            </Box>
        </Box>  
    );
};

export default withResponsive(NewsletterSectionLayout);