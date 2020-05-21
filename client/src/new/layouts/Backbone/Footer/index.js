import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Box, Paragraph } from 'grommet';

import { layout } from '../../../../layout';

const FooterLink = styled(Link)`
  font-size: 12px;
`

const IconLink = styled.a`
  padding-right: 20px;
`

const FooterLayout = ({
  description,
  socialIcons,
  navigationLinks,
  disclaimerText
}) => (
  <>
    <Box direction="row" pad="small" background="lightGrey">
      <Box width="33%" pad="medium">
            <Paragraph size="small">
                {description}
            </Paragraph>
            <Box direction="row" pad="small">
              {socialIcons.map(({key, link, icon}) =>
                <IconLink key={key} href={link} target="_blank" rel="noopener noreferrer">{icon}</IconLink>
              )}
            </Box>
        </Box>
        <Box direction="row" wrap pad="medium">
            {navigationLinks.map(({target, identifier}) =>
              <Box key={identifier} width={layout.footerNavLinkWidth}>
                <FooterLink to={target}>{identifier}</FooterLink>
              </Box>
            )}
        </Box>
    </Box>
    <Box pad="small">
      <Paragraph size="small" alignSelf="center">
          {disclaimerText}
      </Paragraph>
    </Box>
  </>
)

export default FooterLayout;

