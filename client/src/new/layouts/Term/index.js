import React from 'react';

import Skeleton from "react-loading-skeleton";
import { Box, Heading, Text } from 'grommet';

const TermLayout = ({title, textLines}) => {
    return (
      <Box pad="large" align="center">
        <Box fill background="lightGrey" pad="medium">
          {title ?
          <Heading margin={{vertical: "medium"}} alignSelf="center">{title}</Heading>
          :
          <Skeleton />
          }
          {textLines ?
          textLines.map(oneLine =>
            <Text margin={{vertical: "medium"}}>{oneLine}</Text>
          )
          :
          <Skeleton count={25}/>
          }
        </Box>
      </Box>
    );
};

export default TermLayout;
