import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { Box, Heading, Button, Text } from 'grommet';

const PromoContent = ({close, currency, history, t}) => {
  const prices = {
    EUR: '€24',
    CAD: '$35',
  }
    return (
        <Box height={"100%"} fill={"horizontal"} pad={"medium"} justify={"around"} background={"#c5b6a3"}>
            <Heading level={1} size={'promo'} textAlign={'left'}>{t("promo.name")}</Heading>
            <Text>{t("promo.message", {prices: prices[currency]})}</Text>
            <Button primary onClick={()=>{close(); history.push('/shop')}}label={t("promo.cta")} alignSelf={"left"} style={{color: 'white'}}/>
            <Text>{t("promo.expiration")}</Text>
        </Box>
    );
};

export default withTranslation()(withRouter(PromoContent));
