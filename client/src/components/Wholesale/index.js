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

const Wholesale = () => {
  const { t } = useTranslation();
  const { mediaType } = useResponsive();
  return (
    <>
      <TwoColLayout>
        <Box height={layout[`twoColLayoutHeight_${mediaType}`] || twoColLayoutHeight}>
          <CloudImage
            img={`Products/Mains/ElLimon_Catalogue_bcsmkl`}
            maxWidth={720}
            fit='cover'
          />
        </Box>
        <Box>
          <Heading level={1}>{t("wholesale.title")}</Heading>
          {t("wholesale.description").split("<br>").map(para =>
            <Text margin={{top: "medium"}}>{para}</Text>
          )}
        </Box>
      </TwoColLayout>
    </>
  );
};

export default Wholesale;
