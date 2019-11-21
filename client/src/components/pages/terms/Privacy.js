import React from 'react';

import SingleTermContainer from '../../containers/terms/TermContainer';
import NewsletterContainer from '../../containers/newsletter/NewsletterContainer';

const Terms = () => {
    return (
    <>
        <SingleTermContainer id={'privacy'}/>
        <NewsletterContainer /> 
    </>
    );
};

export default Terms;