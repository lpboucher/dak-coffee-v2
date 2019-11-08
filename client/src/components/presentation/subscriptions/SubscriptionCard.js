import React from 'react';
import { withTranslation } from 'react-i18next';

import CardLayout from '../../layouts/CardLayout';
import IconWithTextLayout from '../../layouts/IconWithTextLayout';
import SubscriptionForm from '../subscriptions/SubscriptionSelectionForm';

import { Java, Tasks, Money, Plan, Bar } from 'grommet-icons';

const SubscriptionCard = ({id, name, slug, price, currency, t}) => {
    const displayCurr = currency.toLowerCase()
    const SPECS = {
        "classics-subscription": [
            {icon: <Java style={{margin: '0 20px'}}/>, description: "fresh"},
            {icon: <Tasks style={{margin: '0 20px'}}/>, description: "choice"},
            {icon: <Money style={{margin: '0 20px'}}/>, description: "save"},
            {icon: <Plan style={{margin: '0 20px'}}/>, description: "receive"}
        ],
        "roasters-subscription": [
            {icon: <Java style={{margin: '0 20px'}}/>, description: "fresh"},
            {icon: <Bar style={{margin: '0 20px'}}/>, description: "varieties"},
            {icon: <Money style={{margin: '0 20px'}}/>, description: "save"},
            {icon: <Plan style={{margin: '0 20px'}}/>, description: "receive"}
        ]
    }
    return (
        <CardLayout 
            heading={name}
            description={t(`products:subscription.${slug}.description`)}
            price={`${t("sections.subscription.price")} ${price[displayCurr].symbol}${price[displayCurr].value.toFixed(2)}`}
            shippingText={`(${t("sections.subscription.shipping")} EU + NORTH AMERICA)`}
            specsList={SPECS[slug].map(spec => 
                <IconWithTextLayout
                    key={`${slug}${spec.description}`}
                    icon={spec.icon}
                    description={t(`sections.subscription.icons.${spec.description}`)}
                    size={"small"}
                    spacing={{vertical: "small"}}
                    margin="0px"
                    vertical={'center'}
                />
            )}
            optionSelectionForm={
                <SubscriptionForm
                    withAllOptions={slug === "classics-subscription"}
                    id={id}
                />
            }
        />
    );
};

export default withTranslation()(SubscriptionCard);