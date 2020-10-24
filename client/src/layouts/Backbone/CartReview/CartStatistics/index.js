import React from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../../../../hooks/utils/useResponsive';
import { useMobileMenu } from '../../../../hooks/global/useMobileMenu';

import { Box, Text } from 'grommet';

const CartStatisticsLayout = ({numberOfItems, total}) => {
  const { t } = useTranslation();
  const { greaterThan } = useResponsive();
  const { isOpen, setOpen } = useMobileMenu();
  return (
  <Box direction="row" fill background="mainDark" justify="center" align="center">
    {greaterThan.medium ?
      <>
        <Box direction="row" fill justify="center" align="center">
          <Text margin={{right: "small"}}>{t("cart.items-in-cart")}</Text>
          <Text weight="bold">{numberOfItems}</Text>
        </Box>
        <Box direction="row" fill justify="center" align="center">
          <Text margin={{right: "small"}}>{t("cart.total")}</Text>
          <Text weight="bold">{total}</Text>
        </Box>
      </>
      :
      <>
        <Box
          direction="row"
          fill
          justify="center"
          align="center"
          onClick={!isOpen ? setOpen : null}
        >
          <Text>{t("menu")}</Text>
        </Box>
        <Box direction="row" fill justify="center" align="center" aria-controls="example-collapse-text" className="snipcart-checkout">
          {greaterThan.extraSmall &&
            <>
              <Text margin={{right: "small"}}>{t("cart.items-in-cart-mobile")}</Text>
              <Text weight="bold">{numberOfItems}</Text>
              <Text margin={{horizontal: "small"}}>|</Text>
            </>
          }
          <Text margin={{right: "small"}}>{t("cart.total")}</Text>
          <Text weight="bold">{total}</Text>
        </Box>
      </>
    }
  </Box>
  )
}

export default CartStatisticsLayout;
