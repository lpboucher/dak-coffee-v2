import React from 'react';

import { Main } from 'grommet';

import { layout } from '../../../layout';

const BackBoneLayout = ({
  header,
  metas = [],
  main,
  footer,
  layers = []
}) => (
  <>
    {header}
    {metas.map(meta => meta)}
    <Main pad={{horizontal: layout.baseWrapperPadding}}>
      {main}
    </Main>
    {footer}
    {layers.map(layer => layer)}
  </>
)

export default BackBoneLayout;

