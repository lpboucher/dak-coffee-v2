import React from 'react';
import { useResponsive } from '../../hooks/utils/useResponsive';

import { Box, Heading, Text } from 'grommet';

import { layout } from '../../layout';

const {
  twoColLayoutWidth,
} = layout;

const ContactLayout = ({departments}) => {
  const { mediaType } = useResponsive();
  return (
    <Box background="lightGrey" direction="row" justify="around" wrap>
      {departments.map((oneDepartment) =>
        <Box width={layout[`twoColLayoutWidth_${mediaType}`] || twoColLayoutWidth} pad={mediaType === "medium" ? "large" : "xlarge"} justify="center">
          <Heading responsive={false} level={1}>{oneDepartment.name}</Heading>
          <Text responsive={false} margin={{'bottom': 'small'}}><a href={`mailto: ${oneDepartment.email}`}>{oneDepartment.email}</a></Text>
          <Text responsive={false} margin={{'bottom': 'small'}}>{oneDepartment.description}</Text>
        </Box>
      )}
    </Box>
  );
};

export default ContactLayout;
