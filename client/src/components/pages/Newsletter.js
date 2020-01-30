import React from 'react';

import SEO from '../utils/SEO/SEO';
import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

import { Box } from 'grommet';

const Subscribe = () => {
    return (
        <>
        <SEO canon="https://www.dakcoffeeroasters.com/subscribe" />
        <Box pad={{"top": '160px'}} >
            <NewsletterContainer isFull={true}/>
        </Box>
        </>
    );
};

export default Subscribe;