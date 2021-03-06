import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../hooks/utils/useResponsive';

import { Box, Button, Text } from 'grommet';

import { layout } from '../../layout';

const {
  newsletterSectionWidth,
  newsletterSectionWidth_small,
  newsletterSectionPadding,
  newsletterSectionPadding_small,
  newsletterButtonMargin,
  newsletterButtonMargin_small
} = layout;

export const NewsletterButton = styled(Button)`
  font-size: 10px;
  line-height: 10px;
  border: ${({isLink}) => isLink ? 'none' : 'inherit'};
  color: ${({isLink, theme}) => theme.global.colors.mainWhite};
  background: ${({isLink, theme}) => theme.global.colors.mainDark};
  min-height: ${({height}) => height ? height : '40px'};
`

const NewsletterLayout = ({name, email, submitLabel, description}) => {
  const { lessThan } = useResponsive();
  return (
    <>
      <Box background="mainDark" pad={lessThan.medium ? newsletterSectionPadding_small : newsletterSectionPadding} direction="row" justify="around" wrap>
        <Box width={lessThan.large ? newsletterSectionWidth_small : newsletterSectionWidth} justify="center">
          <Text textAlign="center">
            {description}
          </Text>
        </Box>
        <Box direction="row" width={lessThan.large ? newsletterSectionWidth_small : newsletterSectionWidth} align="center" justify="around" wrap>
          {email}
          <NewsletterButton
            type="submit"
            label={submitLabel}
            color="mainWhite"
            margin={lessThan.large ? newsletterButtonMargin_small : newsletterButtonMargin}
          />
        </Box>
      </Box>
    </>
  );
};

export default NewsletterLayout;
