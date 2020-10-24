import React from 'react';
import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box, Text } from 'grommet';
import { NewsletterButton } from "../index";

import { layout } from '../../../../layout';

const {
  fullNewsletterWidth,
  fullNewsletterPadding,
  newsletterTextMargin
} = layout;

const FullNewsletterLayout = ({name, email, submitLabel, description, heading}) => {
  const { mediaType, lessThan } = useResponsive();
  return (
    <>
      <Box background="mainDark" pad={layout[`fullNewsletterPadding_${mediaType}`] || fullNewsletterPadding} direction="row" justify="around" wrap>
        <Box width={layout[`fullNewsletterWidth_${mediaType}`] || fullNewsletterWidth} pad={layout[`fullNewsletterPadding_${mediaType}`] || fullNewsletterPadding}>
          <Text size="large" margin={{bottom: layout[`newsletterTextMargin_${mediaType}`] || newsletterTextMargin}}>
            {heading}
          </Text>
          <Text size="large" margin={{bottom: lessThan.medium ? "none" : newsletterTextMargin}}>
            {description}
          </Text>
        </Box>
        <Box width={layout[`fullNewsletterWidth_${mediaType}`] || fullNewsletterWidth} align="center" pad={layout[`fullNewsletterPadding_${mediaType}`] || fullNewsletterPadding} justify="between">
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

export default FullNewsletterLayout;

