import React from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../hooks/utils/useResponsive';

import { Box, Button, Text } from 'grommet';

import { layout } from '../../../layout';

const {
  newsletterSectionWidth,
  newsletterSectionWidth_small,
  newsletterSectionPadding,
  newsletterSectionPadding_small,
} = layout;

export const NewsletterButton = styled(Button)`
  font-size: 10px;
  line-height: 10px;
  border: ${({isLink}) => isLink ? 'none' : 'inherit'};
  color: ${({isLink, theme}) => isLink ? theme.global.colors.mainWhite : theme.global.colors.mainDark};
  background: ${({isLink, theme}) => isLink ? theme.global.colors.mainDark : theme.global.colors.mainWhite};
  min-width: ${({width}) => width ? width : '200px'};
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
          {name}
          {email}
          <NewsletterButton
            type="submit"
            label={submitLabel}
            color="mainWhite"
          />
        </Box>
      </Box>
    </>
  );
};

export default NewsletterLayout;
