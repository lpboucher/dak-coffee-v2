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

const Sustainability = () => {
  const { t } = useTranslation();
  const { mediaType } = useResponsive();
  return (
    <>
      <TwoColLayout background="minor-3">
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/sourcing_zkkvgf`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
        <Box>
          {t("sustainability.sourcing.title").split("<br>").map(founder =>
            <Heading margin={{bottom: "small"}}level={4}>{founder}</Heading>
          )}
          {t("sustainability.sourcing.description").split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
      </TwoColLayout>
      <TwoColLayout background="minor-4">
        <Box>
          <Heading color="mainWhite" level={4}>{t("sustainability.packaging.title")}</Heading>
          {t("sustainability.packaging.description").split("<br>").map(para =>
            <Text color="mainWhite" margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/wholesalepicture_rjd4ej`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
      </TwoColLayout>
      <TwoColLayout background="minor-3">
      <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Intros/savingcoffee_di6oqj`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
        <Box>
          {t("sustainability.waste.title").split("<br>").map(founder =>
            <Heading margin={{bottom: "small"}}level={4}>{founder}</Heading>
          )}
          {t("sustainability.waste.description").split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
      </TwoColLayout>
    </>
  );
};

export default Sustainability;
