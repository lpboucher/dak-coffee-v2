import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { contactGridLayout } from './globalResponsiveLayout';

import { Box, Heading, Text } from 'grommet';

const ContactGridLayout = ({contacts, media}) => {
    const layout = contactGridLayout(media);
    return (
        <Box direction="row" wrap pad="large" background="darkGrey">
            {contacts.map(contact => 
                <Box key={contact.id} width={layout.width} align={layout.align} pad={{vertical: "medium", horizontal: "xlarge"}}>
                    <Heading level={1} size={layout.size} textAlign={layout.align}>{contact.title}</Heading>
                    <Text margin={{'bottom': 'small'}} size="small" textAlign={layout.align}><a href={`mailto: ${contact.email}`}>{contact.email}</a></Text>
                    <Text margin={{'bottom': 'small'}} size="small" textAlign={layout.align}>{contact.description}</Text>
                </Box>
            )}
        </Box>
    );
};

export default withResponsive(ContactGridLayout);