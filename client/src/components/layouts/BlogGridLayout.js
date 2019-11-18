import styled from 'styled-components';

import { Box } from 'grommet';

const VariableGrid = styled(Box)`
    display: grid;
    grid-gap: 40px;
    grid-auto-rows: 420px;

    & > *:nth-child(10n+3),
    & > *:nth-child(10n+8) {
        grid-column: span 2
    }

    @media only screen and (min-width: 993px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media only screen and (min-width: 768px) and (max-width: 993px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 500px) and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);

        & > *:nth-child(10n+3),
        & > *:nth-child(10n+8) {
            grid-column: span 1
        }
    }
`

export default VariableGrid;