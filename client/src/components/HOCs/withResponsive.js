import React from 'react';
import { connect } from 'react-redux';
import { getMediaSize } from '../../ducks/views';

const withResponsive = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
  HOC.displayName = `WithResponsive(${WrappedComponent.displayName || WrappedComponent.name})`
  return connect(mapStateToProps,null)(HOC);
};

function mapStateToProps(state) {
    return {
        media: getMediaSize(state),
    };
}

export default withResponsive;