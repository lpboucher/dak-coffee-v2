import React from 'react';
import { useTranslation } from 'react-i18next'
import { useFAQs } from '../../hooks/terms/useTerms';

import { getTranslatedItem } from '../../services/productDisplayService';

import { Accordion, AccordionPanel, Heading, Box, Tabs, Tab, Text } from 'grommet';

const FAQ = () => {
  const { t } = useTranslation();
  const groups = useFAQs();
  return (
    <Box pad="large">
      <Heading level={1}>{t("faq.heading")}</Heading>
      <Tabs justify="start">
        {Object.keys(groups).map((currentGroup) =>
          <Tab title={t(`faq.${currentGroup}`)}>
            <Accordion>
              {groups[currentGroup].map(item =>
                <AccordionPanel label={getTranslatedItem(item.question)}>
                  <Box pad="medium" background="light-2">
                      <Text>{getTranslatedItem(item.answer)}</Text>
                  </Box>
                </AccordionPanel>
              )}
              </Accordion>
          </Tab>
        )}
      </Tabs>
    </Box>
  );
};

export default FAQ;
