import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { isPromoOpen, closePromotion } from '../../../ducks/views';

import AnnouncementModal from '../../presentation/global/AnnouncementModal';

class AnnoucementContainer extends PureComponent {

    render() {
        const { isPromoOpen, close } = this.props;
        return (
            <>
                {isPromoOpen &&
                    <AnnouncementModal close={close} />
                }
            </>
        );
    }
};



function mapStateToProps(state) {
    return {
        isPromoOpen: isPromoOpen(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        close: () => dispatch(closePromotion()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnoucementContainer);

