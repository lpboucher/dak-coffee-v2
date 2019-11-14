import React from 'react';
import withResponsive from '../HOCs/withResponsive';

import { Box, Heading, Text } from 'grommet';

import { cardLayout } from './globalResponsiveLayout';

const CardLayout = ({heading, description, specsList, image, price, shippingText, optionSelectionForm, media}) => {
    const layout = cardLayout(media)
    return (
        <>
            {/*<Box height="400px" width="100%" background="lightGrey" >
                {//<Image fit="contain" src={`${thumb.link? thumb.link.href : ""}`}/>
                }
            </Box>*/}
            <Box pad="large" flex="grow" justify="evenly" >
                <Heading level="1" size={layout.size} margin={{vertical: 'small'}}>{heading}</Heading>
                <Text size="small">{description}</Text>
                <Box>
                    {specsList}
                </Box>
                <Heading level="3">{price}</Heading>
                <Text>{shippingText}</Text>
                    {optionSelectionForm}
            </Box>      
          </>
    );
};

export default withResponsive(CardLayout);