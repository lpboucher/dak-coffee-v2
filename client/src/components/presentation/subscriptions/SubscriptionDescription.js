import React from 'react';
import { withTranslation } from 'react-i18next';

import SimpleDescriptionLayout from '../../layouts/SingleDescriptionLayout';

const SubscriptionDescription = ({t}) => {
    return (
        <SimpleDescriptionLayout 
            heading={t("sections.subscription.title")}
            description={t("sections.subscription.description")}
        />
    );
};

export default withTranslation()(SubscriptionDescription);