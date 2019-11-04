import React from 'react';
import withResponsive from '../../HOCs/withResponsive';
import { withTranslation } from 'react-i18next';

import { Box, Paragraph } from 'grommet';
import { Instagram } from 'grommet-icons';

import { footerDescriptionLayout } from '../../layouts/globalResponsiveLayout';

const FooterDescription = ({t, media}) => {
    const layout = footerDescriptionLayout(media);
    const isLarge = media === "large" || media === "infinity"
    return (
        <Box width={layout.width} pad="medium">
            <Paragraph size="small" style={{"padding": layout.pad}}>
                {t("footer.description")}
            </Paragraph>
            <Box pad={{"horizontal": isLarge ? "20px 0px" : "0"}}>
                <a href="http://www.instagram.com/dakcoffeeroasters" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </a>
            </Box>
        </Box>
    );
};

export default withTranslation()(withResponsive(FooterDescription));