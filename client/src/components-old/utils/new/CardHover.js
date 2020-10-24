import styled from 'styled-components';

import { Box } from 'grommet';

const CardHover = styled(Box)`
  position: relative;
  width: 100%;
    &:before {
        content: "";
        display: block;
        width: 75%;
        border-bottom: 1px solid #979797;
        margin-bottom: 10px;
    }
`

export default CardHover;
