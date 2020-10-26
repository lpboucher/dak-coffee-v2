import React from 'react';
import styled from "styled-components";

import { useResponsive } from '../../../hooks/utils/useResponsive';

import { Box, Accordion, AccordionPanel } from 'grommet';

import { layout } from '../../../layout';

const {
  accordionFontSize,
} = layout;

const Panel = styled(AccordionPanel)`
  padding: 0 0 10px 0;

  & div {
    padding-left: 0;
  }

  & h3 {
    margin-left: 0;
    font-weight: 400;
    font-size: ${({size}) => size};
  }
`;

const DropDownLayout = ({accordions = []}) => {
  const { mediaType } = useResponsive();
    return (
      <Box pad={{horizontal: "small", top: "small"}}>
        <Accordion>
          {accordions.map(acc =>
          <Box key={`${acc.title}`} pad={{top: "medium"}}>
            <Panel size={layout[`accordionFontSize_${mediaType}`] || accordionFontSize} label={acc.title}>
              {acc.content}
            </Panel>
          </Box>
          )}
        </Accordion>
      </Box>
    );
};

export default DropDownLayout;
