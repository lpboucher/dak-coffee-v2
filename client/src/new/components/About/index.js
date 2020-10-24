import React from 'react';
import { useTranslation } from "react-i18next";
import { useResponsive } from '../../hooks/utils/useResponsive';

import { Box, Heading, Text } from 'grommet';

import CloudImage from '../../utils/images/CloudImage';
import TwoColLayout from '../../layouts/Share/TwoCol';

import { layout } from '../../../layout';

const {
  twoColLayoutHeight,
} = layout;

const About = () => {
  const { t } = useTranslation();
  const { mediaType } = useResponsive();
  return (
    <>
      <TwoColLayout>
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/Aboutuswebsite_wiss4b`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
        <Box>
          <Heading level={1}>{t("about.founders.title")}</Heading>
          {t("about.founders.description").split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
      </TwoColLayout>
      <TwoColLayout>
        <Box>
          <Heading level={1}>{t("about.coffee.title")}</Heading>
          {t("about.coffee.description").split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/Ourcoffee_c8d7oa`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
      </TwoColLayout>
    </>
  );
};

export default About;
