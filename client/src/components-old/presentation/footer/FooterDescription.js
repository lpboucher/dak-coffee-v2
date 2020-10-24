import React from 'react';
import styled from 'styled-components';
import withResponsive from '../../HOCs/withResponsive';
import { withTranslation } from 'react-i18next';

import { Box, Paragraph } from 'grommet';
import { Instagram, FacebookOption, LinkedinOption, Pinterest } from 'grommet-icons';

import { footerDescriptionLayout } from '../../layouts/globalResponsiveLayout';

const WithPad = styled.a`
 padding-right: 20px;
`

const FooterDescription = ({t, media}) => {
    const layout = footerDescriptionLayout(media);
    const isLarge = media === "large" || media === "infinity"
    return (
        <Box width={layout.width} pad="medium">
            <Paragraph size="small" style={{"padding": layout.pad}}>
                {t("footer.description")}
            </Paragraph>
            <Box direction="row" pad={{"horizontal": isLarge ? "20px 0px" : "0"}}>
                <WithPad href="https://www.instagram.com/dakcoffeeroasters" target="_blank" rel="noopener noreferrer">
                    <Instagram />
                </WithPad>
                <WithPad href="https://www.facebook.com/dakcoffeeroasters" target="_blank" rel="noopener noreferrer">
                    <FacebookOption />
                </WithPad>
                <WithPad href="https://www.linkedin.com/company/13062828" target="_blank" rel="noopener noreferrer">
                    <LinkedinOption />
                </WithPad>
                <WithPad href="https://pinterest.com/dakcoffeeroasters" target="_blank" rel="noopener noreferrer">
                    <Pinterest />
                </WithPad>
            </Box>
        </Box>
    );
};

export default withTranslation()(withResponsive(FooterDescription));
