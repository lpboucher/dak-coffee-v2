import React from 'react';

import { Accordion, AccordionPanel } from 'grommet';

const DropDownLayout = ({multi=false, accordion}) => {
    return (
      <>
      {!multi ?
      <Accordion>
        <AccordionPanel label={accordion.title}>
          {accordion.content}
        </AccordionPanel>
      </Accordion>
      :
      <Accordion>
        {accordion.map(acc =>
        <AccordionPanel label={acc.title}>
          {acc.content}
        </AccordionPanel>
        )}
      </Accordion>
      }
      </>
    );
};

export default DropDownLayout;
