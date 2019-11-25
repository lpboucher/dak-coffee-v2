import React from 'react';
import { withTranslation, Trans } from 'react-i18next';
import withResponsive from '../HOCs/withResponsive';

import { Box, Heading, Text } from 'grommet';

import { singleDescriptionLayout } from '../layouts/globalResponsiveLayout';

const SingleDescriptionLayout = ({heading, description, media}) => {
    const layout = singleDescriptionLayout(media)
    return (
        <Box pad="large">
            <Heading level={1} size={layout.size} textAlign="center" margin={{bottom: 'medium'}}>{heading}</Heading>
            <Text textAlign="center" size={layout.size} margin={{horizontal: layout.marginH}}>
                <Trans i18nKey={description} />
            </Text>
        </Box>
    );
};

export default withTranslation()(withResponsive(SingleDescriptionLayout));