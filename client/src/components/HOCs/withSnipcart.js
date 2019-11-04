import React from 'react';

const withCart = (WrappedComponent) => {
    // And return a new anonymous component
    return class extends React.Component {
        render() {
        let snipcartApi;
        document.addEventListener('snipcart.ready', function() {
            snipcartApi = window.Snipcart.api;
        });
        return <WrappedComponent
                    snipcartAPI={snipcartApi}
                    {...this.props} />;
        }
    }
}

export default withCart;