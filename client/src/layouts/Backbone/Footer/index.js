import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Link } from 'react-router-dom';
import { Box, Paragraph } from 'grommet';

import { layout } from '../../../layout';

const {
  footerDescriptionWidth,
  footerDescriptionWidth_small,
  socialPad,
  socialPad_small
} = layout;

export const FooterLink = styled(Link)`
  font-size: 12px;
  width: ${layout.footerNavLinkWidth};
`

export const ExternalFooterLink = styled.a`
  font-size: 12px;
  width: ${layout.footerNavLinkWidth};
`

const WithOrder = styled(Box)`
  order: ${({order}) => order};
`

const IconLink = styled.a`
  padding-right: 20px;
`

const FooterLayout = ({
  description,
  socialIcons,
  navigationLinks,
  disclaimerText
}) => {
  const { lessThan } = useResponsive();
  return (
    <>
      <Box wrap={lessThan.medium} direction="row" pad="medium" background="lightGrey">
        <WithOrder width={lessThan.medium ? footerDescriptionWidth_small : footerDescriptionWidth} pad="medium">
          <Paragraph size="small">
              {description}
          </Paragraph>
          <Box direction="row" pad={{top: lessThan.medium ? socialPad_small : socialPad}}>
            {socialIcons.map(({key, link, icon}) =>
              <IconLink key={key} href={link} target="_blank" rel="noopener noreferrer">{icon}</IconLink>
            )}
          </Box>
        </WithOrder>
        <WithOrder fill="horizontal" direction="row" wrap pad="medium">
          {navigationLinks.map(nav => nav)}
        </WithOrder>
      </Box>
      <Box pad="small">
        <Paragraph size="small" alignSelf="center">
          {disclaimerText}
        </Paragraph>
      </Box>
    </>
  )
}

export default FooterLayout;

