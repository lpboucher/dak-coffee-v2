import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../../ducks/cart';

import { Box } from 'grommet';

class AddToCartContainer extends Component {

    render() {
        const { item, addToCart } = this.props;
        return (
            <Box
                primary
                color="mainDark"
                margin="small"
                pad="xsmall"
                background="mainDark"
                round="xsmall"
                align="center"
                style={{color: 'white', cursor: 'pointer', textTransform: 'uppercase'}}
                onClick={() => addToCart(item)}
            >
                {this.props.children}
            </Box>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => dispatch(addItemToCart(item)),
    };
}

export default connect(null, mapDispatchToProps)(AddToCartContainer);