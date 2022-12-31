import React from 'react';
import { useTranslation } from "react-i18next";
import { useResponsive } from '../../hooks/utils/useResponsive';

import { Box, Heading, Text } from 'grommet';

import CloudImage from '../../utils/images/CloudImage';
import TwoColLayout from '../../layouts/Share/TwoCol';

import { layout } from '../../layout';

const {
  twoColLayoutHeight,
} = layout;

const About = () => {
  const { t } = useTranslation();
  const { mediaType } = useResponsive();
  return (
    <>
      <TwoColLayout background="minor-3">
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/IMGL9756-bewerkt_j5avae`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
        <Box>
          {t("about.founders.title").split("<br>").map(founder =>
            <Heading margin={{bottom: "small"}}level={4}>{founder}</Heading>
          )}
          {t("about.founders.description").split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
      </TwoColLayout>
      <TwoColLayout background="minor-4">
        <Box>
          <Heading color="mainWhite" level={4}>{t("about.sourcing.title")}</Heading>
          {t("about.sourcing.description").split("<br>").map(para =>
            <Text color="mainWhite" margin={{top: "medium"}}>{para}</Text>
          )}
          <Heading color="mainWhite" level={4} margin={{top: "medium"}}>{t("about.roasting.title")}</Heading>
          {t("about.roasting.description").split("<br>").map(para =>
            <Text color="mainWhite" margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/IMGL9938-bewerkt_if4tlk`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
      </TwoColLayout>
      <TwoColLayout background="minor-3">
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/IMGL9756-bewerkt_j5avae`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
        <Box>
          {t("about.showroom.title").split("<br>").map(show =>
            <Heading margin={{bottom: "small"}}level={4}>{show}</Heading>
          )}
          {t("about.showroom.description").split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
      </TwoColLayout>
      <TwoColLayout background="minor-4">
        <Box>
          <Heading color="mainWhite" level={4}>{t("about.team.title")}</Heading>
          {t("about.team.description").split("<br>").map(para =>
            <Text color="mainWhite" margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/IMGL9938-bewerkt_if4tlk`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
      </TwoColLayout>
    </>
  );
};

export default About;
