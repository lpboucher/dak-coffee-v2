import React from 'react';

import { Main } from 'grommet';

const BackBoneLayout = ({
  header,
  main,
  footer
}) => (
  <>
    {header}
    <Main pad={'medium'}>
      {main}
    </Main>
    {footer}
      {/*<Layer full="vertical" position="right" animation="slide" modal={false}>
          Your cart
      </Layer>
      <Layer full="horizontal" position="bottom" animation="slide" modal={false}>
          In your cart
  </Layer>*/}
  </>
)

export default BackBoneLayout;

