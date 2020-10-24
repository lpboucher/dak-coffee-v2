import React from 'react';
import { withTranslation } from 'react-i18next';

import { Box, Paragraph } from 'grommet';

const FooterDisclaimer = ({t}) => {
    return (
        <Box pad="small">
            <Paragraph size="small" alignSelf="center">
                {t("footer.rights")}
            </Paragraph>
        </Box>
    );
};

export default withTranslation()(FooterDisclaimer);