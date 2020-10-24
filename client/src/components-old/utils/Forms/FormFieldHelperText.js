import React from 'react';
import styled from 'styled-components';

import { Box, Text } from 'grommet';
import { FormDown } from 'grommet-icons';

const UpperText = styled(Text)`
    text-transform: uppercase;
`

const FormFieldHelperText = ({text}) => {
    return (
        <Box direction="row" align="center" justify="between" border="bottom">
            <UpperText>{text}</UpperText>
            <FormDown />
        </Box>
    );
};

export default FormFieldHelperText;