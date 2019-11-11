import React from 'react';
import { withTranslation } from 'react-i18next';

import OrderSummaryLayout from '../../layouts/OrderSummaryLayout';
import OrderSummaryItemLayout from '../../layouts/OrderSummaryItemLayout';

import { Button } from 'grommet';

const OrderSummary = ({currency, subTotal, t}) => {
    const SYMBOLS = { EUR: '€', CAD: '$'}
    return (
        <OrderSummaryLayout>
            <OrderSummaryItemLayout label={t("sections.cart.order.subtotal")} price={`${SYMBOLS[currency]}${(subTotal).toFixed(2)}`}/> 
            <Button className="snipcart-checkout" primary fill label={t("sections.cart.order.button")} alignSelf="end" color="mainDark" style={{marginTop: "20px"}}/>
        </OrderSummaryLayout>
    );
};

export default withTranslation()(OrderSummary);