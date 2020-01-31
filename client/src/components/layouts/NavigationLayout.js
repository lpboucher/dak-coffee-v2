import styled from 'styled-components';
import Headroom from 'react-headroom';

const Navigation = styled(Headroom)`
    position: absolute;
    width: 100%;

    & > .headroom--unfixed {
        background-color: transparent;
    }

    & > .headroom--pinned {
        background-color: white;
    }
`;

export default Navigation;