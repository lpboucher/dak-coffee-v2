import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { hasError, getError } from '../../../ducks/views';

import FullLoader from '../../utils/FullLoader';

class ErrorContainer extends PureComponent {

    render() {
        const { hasError, errorMsg } = this.props;
        return (
            <>
                {hasError &&
                    <FullLoader isError text={errorMsg.global} />
                }
            </>
        );
    }
};

function mapStateToProps(state) {
    return {
        hasError: hasError(state),
        errorMsg: getError(state)
    }
}

export default connect(mapStateToProps, null)(ErrorContainer);

