import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNewsletter } from '../../hooks/newsletter/useNewsletter';
import { Form, Field } from 'react-final-form';

import NewsletterLayout from '../../layouts/Newsletter';
import { TextInputAdapter } from '../../utils/forms/FormHelpers';

import { newsletterValidation } from '../../services/formValidation';

const Newsletter = () => {
  const { t } = useTranslation();
  const { add, error } = useNewsletter();
  const nameField = <Field name="name" component={TextInputAdapter} type="text" placeholder={t("newsletter.form.name")}/>;
  const emailField = <Field name="email" component={TextInputAdapter} type="text" placeholder={t("newsletter.form.email")}/>
  const addRecipient = ({name, email}) => {
      add(name, email);
    }
    return (
      <Form
        onSubmit={addRecipient}
        validate={newsletterValidation}
        render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
            <NewsletterLayout
              name={nameField}
              email={emailField}
              privacyLabel={t("newsletter.privacy")}
              submitLabel={t("newsletter.button")}
              description={t("newsletter.description")}
              error={t(error.newsletter)}
            />
        </form>
        )}
      />
    );
};

export default Newsletter;
