import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { isPromoOpen, closePromotion, getDisplayCurrency } from '../../../ducks/views';

import AnnouncementModal from '../../presentation/global/AnnouncementModal';

class AnnoucementContainer extends PureComponent {

    render() {
        const { isPromoOpen, close, currency } = this.props;
        return (
            <>
                {isPromoOpen &&
                    <AnnouncementModal currency={currency} close={close} />
                }
            </>
        );
    }
};



function mapStateToProps(state) {
    return {
        isPromoOpen: isPromoOpen(state),
        currency: getDisplayCurrency(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        close: () => dispatch(closePromotion()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnoucementContainer);

