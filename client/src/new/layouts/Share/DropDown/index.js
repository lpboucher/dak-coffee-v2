import React from 'react';
import styled from "styled-components";

import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Accordion, AccordionPanel } from 'grommet';

import { layout } from '../../../../layout';

const {
  accordionFontSize,
} = layout;

const Panel = styled(AccordionPanel)`
  padding: 0 0 10px 0;

  & h3 {
    font-weight: 400;
    font-size: ${({size}) => size};
  }
`;

const DropDownLayout = ({multi=false, accordion}) => {
  const { mediaType } = useResponsive();
    return (
      <>
      {!multi ?
      <Accordion>
        <Panel size={layout[`accordionFontSize_${mediaType}`] || accordionFontSize} label={accordion.title}>
          {accordion.content}
        </Panel>
      </Accordion>
      :
      <Accordion>
        {accordion.map(acc =>
        <Panel size={layout[`accordionFontSize_${mediaType}`] || accordionFontSize} label={acc.title}>
          {acc.content}
        </Panel>
        )}
      </Accordion>
      }
      </>
    );
};

export default DropDownLayout;
