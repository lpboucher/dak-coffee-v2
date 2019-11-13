import styled from 'styled-components';

import { Box } from 'grommet';

const VariableGrid = styled(Box)`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 420px;

    & > *:nth-child(10n+3),
    & > *:nth-child(10n+8) {
        grid-column: span 2
    }
`

export default VariableGrid;