import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Box, Button, Text } from 'grommet';

const NewsletterButton = styled(Button)`
  font-size: 10px;
  line-height: 10px;
  border: ${({isLink}) => isLink ? 'none' : 'inherit'};
  color: ${({isLink, theme}) => isLink ? theme.global.colors.mainWhite : theme.global.colors.mainDark};
  background: ${({isLink, theme}) => isLink ? theme.global.colors.mainDark : theme.global.colors.mainWhite};
`

const NewsletterLayout = ({name, email, privacyLabel, submitLabel, description, error}) => {
    return (
      <>
      <Box direction="row" justify="around" wrap>
        <Box width="50%" pad="small" justify="center">
          {name}
          <Link to="/privacy">
            <NewsletterButton isLink label={privacyLabel}></NewsletterButton>
          </Link>
        </Box>
        <Box width="50%" pad="small" justify="center">
          {email}
          <NewsletterButton
            type="submit"
            label={submitLabel}
            color="mainWhite"
            alignSelf="start"
          />
        </Box>
      </Box>
      <Box>
        <Text textAlign="center">
          {description}
        </Text>
        <Text textAlign="center" color="red">{error}</Text>
      </Box>
      </>
    );
};

export default NewsletterLayout;
