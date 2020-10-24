import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, AccordionPanel, Text } from 'grommet';

const FAQQuestion = ({question, answer, t}) => {
    return (
        <AccordionPanel label={question}>
            <Box pad="medium" background="light-2">
                <Text>{answer}</Text>
            </Box>
        </AccordionPanel>
    );
};

export default withTranslation()(FAQQuestion);