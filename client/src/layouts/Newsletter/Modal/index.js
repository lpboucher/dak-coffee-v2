import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from 'grommet';
import { NewsletterButton } from "../index";

const ModalNewsletterLayout = ({name, email, privacyLabel, submitLabel, description}) => {
    return (
      <>
      <Box direction="row" justify="around" wrap>
        <Box width="50%" pad="medium" justify="center">
          {name}
          <Link to="/privacy">
            <NewsletterButton isLink label={privacyLabel}></NewsletterButton>
          </Link>
        </Box>
        <Box width="50%" pad="medium" justify="center">
          {email}
          <NewsletterButton
            type="submit"
            label={submitLabel}
            color="mainWhite"
            alignSelf="start"
            margin={{left: "20px"}}
            width="150px"
            />
        </Box>
      </Box>
      {/*<Box pad="medium">
        <Text textAlign="center">
          {description}
        </Text>
    </Box>*/}
      </>
    );
};

export default ModalNewsletterLayout;


