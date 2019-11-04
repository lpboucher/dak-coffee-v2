import React from 'react';
import { withTranslation } from 'react-i18next';

import OrderSummaryLayout from '../../layouts/OrderSummaryLayout';
import OrderSummaryItemLayout from '../../layouts/OrderSummaryItemLayout';

import { Button } from 'grommet';

const OrderSummary = ({currency, shippingCharged, taxes, subTotal, total, t}) => {
    const SYMBOLS = { EUR: '€', CAD: '$'}
    return (
        <OrderSummaryLayout>
            <OrderSummaryItemLayout label={t("sections.cart.order.subtotal")} price={`${SYMBOLS[currency]}${(subTotal).toFixed(2)}`}/>
            {/*<OrderSummaryItemLayout label={t("sections.cart.order.shipping")} price={`${SYMBOLS[currency]}${(3.5).toFixed(2)}`}/> 
            <OrderSummaryItemLayout label={t("sections.cart.order.taxes")} price={`${SYMBOLS[currency]}${(taxes).toFixed(2)}`}/>
    <OrderSummaryItemLayout label={t("sections.cart.order.discount")} price={`${SYMBOLS[currency]}${(-1).toFixed(2)}`}/> */}
            <OrderSummaryItemLayout label={t("sections.cart.order.total")} price={`${SYMBOLS[currency]}${(total).toFixed(2)}`}/>  
            <Button primary fill label={t("sections.cart.order.button")} alignSelf="end" color="mainDark" style={{marginTop: "20px"}}/>
        </OrderSummaryLayout>
    );
};

export default withTranslation()(OrderSummary);