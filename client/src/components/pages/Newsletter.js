import React from 'react';

import NewsletterContainer from '../containers/newsletter/NewsletterContainer';

import { Box } from 'grommet';

const Subscribe = () => {
    return (
        <Box pad={{"top": '160px'}} >
            <NewsletterContainer isFull={true}/>
        </Box>
    );
};

export default Subscribe;