import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNewsletter } from '../../hooks/newsletter/useNewsletter';
import { Form, Field } from 'react-final-form';

import NewsletterLayout from '../../layouts/Newsletter';
import { TextInputAdapter } from '../../utils/forms/FormHelpers';
import ClipLoader from 'react-spinners/ClipLoader';

import { newsletterValidation } from '../../services/formValidation';

const Newsletter = () => {
  const { t } = useTranslation();
  const { add, isProcessing } = useNewsletter();
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
              submitLabel={isProcessing ? <ClipLoader size={15} color='black'/> : t("newsletter.button")}
              description={t("newsletter.description")}
              isProcessing={isProcessing}
            />
        </form>
        )}
      />
    );
};

export default Newsletter;
