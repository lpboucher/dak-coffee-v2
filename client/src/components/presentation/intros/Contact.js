import React from 'react';
import { withTranslation } from 'react-i18next';

import ContactGridLayout from '../../layouts/ContactGridLayout';

const Contact = ({t}) => {
    return (
        <ContactGridLayout 
            contacts={[
                {title:t("sections.contact.general.title"), email: "info@dakcoffeeroasters.com", description:t("sections.contact.general.helper")},
                {title:t("sections.contact.wholesaleeu.title"), email: "info@dakcoffeeroasters.com", description:t("sections.contact.wholesaleeu.helper")},
                {title:t("sections.contact.marketing.title"), email: "marketing@dakcoffeeroasters.com", description:t("sections.contact.marketing.helper")},
                {title:t("sections.contact.wholesalena.title"), email: "wholesale@dakcoffeeroasters.com", description:t("sections.contact.wholesalena.helper")},
            ]}
        />
    );
};

export default withTranslation()(Contact);