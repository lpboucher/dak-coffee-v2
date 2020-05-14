import React from 'react';

import { Main } from 'grommet';

import { layout } from '../../../layout';

const BackBoneLayout = ({
  header,
  main,
  footer
}) => (
  <>
    {header}
    <Main pad={{horizontal: layout.baseWrapperPadding}}>
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

