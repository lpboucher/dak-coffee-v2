import React, { Fragment } from 'react';

import { Main } from 'grommet';

import { layout } from '../../layout';

const BackBoneLayout = ({
  header,
  metas = [],
  main,
  footer,
  layers = [],
  withBasePadding = true
}) => (
  <>
    {header}
    {metas.map((meta, index) => <Fragment key={`meta${index}`}>{meta}</Fragment>)}
    <Main pad={withBasePadding ? {horizontal: layout.baseWrapperPadding} : "0px"}>
      {main}
    </Main>
    {footer.map((f, index) => <Fragment key={`footer${index}`}>{f}</Fragment>)}
    {layers.map((layer, index) => <Fragment key={`layer${index}`}>{layer}</Fragment>)}
  </>
)

export default BackBoneLayout;

