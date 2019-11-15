import React from 'react';
import { withTranslation } from 'react-i18next';

import ContactGridLayout from '../../layouts/ContactGridLayout';

const Contact = ({t}) => {
    return (
        <ContactGridLayout 
            contacts={[
                {title:t("sections.contact.general.title"), email: "info@dakcoffeeroasters.com", description:t("sections.contact.general.helper"), id: '1c'},
                {title:t("sections.contact.wholesaleeu.title"), email: "info@dakcoffeeroasters.com", description:t("sections.contact.wholesaleeu.helper"), id: '2c'},
                {title:t("sections.contact.marketing.title"), email: "marketing@dakcoffeeroasters.com", description:t("sections.contact.marketing.helper"), id: '3c'},
                {title:t("sections.contact.wholesalena.title"), email: "wholesale@dakcoffeeroasters.com", description:t("sections.contact.wholesalena.helper"), id: '4c'},
            ]}
        />
    );
};

export default withTranslation()(Contact);