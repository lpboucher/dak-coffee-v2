import React from 'react';
import { withTranslation } from 'react-i18next';

import FAQCategory from './FAQCategory'

import { Heading, Box, Tabs, Tab } from 'grommet';

const Questions = ({t}) => {
    const catStr = "sections.faq.categories";
    return(
        <Box pad={{horizontal: 'xlarge', top: '200px', bottom: 'large'}}>
            <Heading level={1}>{t("sections.faq.title")}</Heading>
            <Tabs justify="start">
                <Tab title={t(`${catStr}.company.title`)}>
                    <FAQCategory
                        category={`${catStr}.company`}
                        questions={["company-location"]}
                    />
                </Tab>
                <Tab title={t(`${catStr}.shop.title`)}>
                <FAQCategory
                    category={`${catStr}.shop`}
                    questions={["payment", "order-change", "return-policy", "shipping", "order-time"]}
                />
                </Tab>
                <Tab title={t(`${catStr}.subscription.title`)}>
                <FAQCategory
                    category={`${catStr}.subscription`}
                    questions={["order-time", "payment-time", "subscription-pause", "subscription-cancel", "subscription-weight", "subscription-type", "coffee-variety"]}
                />
                </Tab>
                <Tab title={t(`${catStr}.packaging.title`)}>
                <FAQCategory
                    category={`${catStr}.packaging`}
                    questions={["coffee-grinded", "coffee-origin", "roast-expiry", "coffee-fresh", "coffee-brew"]}
                />
                </Tab>
                <Tab title={t(`${catStr}.environment.title`)}>
                <FAQCategory
                    category={`${catStr}.environment`}
                    questions={["coffee", "packaging", "operations"]}
                />
                </Tab>
            </Tabs>
        </Box>
    );
};

export default withTranslation()(Questions);