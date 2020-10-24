import React from 'react';
import { withTranslation } from 'react-i18next';

import Loader from './SimpleLoader';
import Error from './Error';

import { Layer, Box, Text } from 'grommet';

const FullLoader = ({isError=false, text, t}) => {
    return (
        <Layer full modal plain>
            <Box fill align="center" justify="center" background={{"color": "white","opacity": true}}>
                <Text size="medium">{t(`${text}`)}</Text>
                {isError ? 
                    <Error />
                    :
                    <Loader />
                }
            </Box>
        </Layer>
    );
};

export default withTranslation()(FullLoader);