import styled from 'styled-components';

import { Text } from 'grommet';

const Truncate = styled(Text)`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

export default Truncate;
