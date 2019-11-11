import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { Box } from 'grommet';

import { newsletterFormLayout } from '../layouts/globalResponsiveLayout';

const NewsletterForm = ({nameField, emailField, link, button, media, isFull}) => {
    const layout = newsletterFormLayout(media, isFull);
    return (
        <Box direction="row" justify="around" wrap>
            <Box width={layout.width} pad={{"top": "medium", "left": "medium", "right": "medium"}}>
                {nameField}
                {!isFull ? link : null}
            </Box>
            <Box width={layout.width} pad={{"top": "medium", "left": "medium", "right": "medium"}} >
                {emailField}
                {isFull ? link : null}
                {button}
            </Box>
        </Box>
    );
};

export default withResponsive(NewsletterForm);