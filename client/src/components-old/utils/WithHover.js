import styled from 'styled-components';

import { Box } from 'grommet';

const WithHover = styled(Box)`
    opacity: ${props => props.isHoverable ? 1 : 0.5};
    cursor: pointer;
    text-transform: uppercase;
    position: relative;
    &:hover {
        opacity: 0.5;
    }
`

export default WithHover