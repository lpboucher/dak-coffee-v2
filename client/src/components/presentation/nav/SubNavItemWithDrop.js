import React, { Component } from 'react';
import { Box } from 'grommet';

import MenuWithDrop from '../../utils/MenuWithDrop';

export default class extends Component {
  state = { open: false };

  render() {
    const { open } = this.state;
    const { label, children } = this.props;
    return (
        <MenuWithDrop
          label={label}
          open={open}
          onClose={() => this.setState({ open: false })}
          onOpen={() => this.setState({ open: true })}
          dropAlign={{ top: 'bottom', left: 'left' }}
          dropContent={(
            <Box pad='small'>
                {children}
            </Box>
          )}
        />
    );
  }
}