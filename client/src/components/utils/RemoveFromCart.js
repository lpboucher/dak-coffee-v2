import React from 'react';

import { Box } from 'grommet';

const RemoveFromCart = ({id, remove}) => {
    return (
        <Box onClick={() => remove(id)} style={{cursor: 'pointer'}}>
            <i className="far fa-trash-alt"></i>
        </Box>
    );
};

export default RemoveFromCart;