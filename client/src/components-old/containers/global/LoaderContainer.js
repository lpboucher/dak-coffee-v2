import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isProcessing, getProcessingText } from '../../../ducks/views';

import FullLoader from '../../utils/FullLoader';

class LoaderContainer extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isProcessing !== this.props.isProcessing;
    }

    render() {
        const { isProcessing, processingText } = this.props;
        return (
            <>
                {isProcessing &&
                    <FullLoader text={processingText} />
                }
            </>
        );
    }
};

function mapStateToProps(state) {
    return {
        isProcessing: isProcessing(state),
        processingText: getProcessingText(state),
    }
}

export default connect(mapStateToProps, null)(LoaderContainer);

