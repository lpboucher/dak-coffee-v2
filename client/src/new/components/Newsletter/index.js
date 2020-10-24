import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNewsletter } from '../../hooks/newsletter/useNewsletter';
import { useResponsive } from '../../hooks/utils/useResponsive';
import { Form, Field } from 'react-final-form';

import ModalNewsletterLayout from '../../layouts/Newsletter/Modal';
import FullNewsletterLayout from '../../layouts/Newsletter/Full';
import NewsletterLayout from '../../layouts/Newsletter';
import { TextInputAdapter } from '../../utils/forms/FormHelpers';
import ClipLoader from 'react-spinners/ClipLoader';

import { newsletterValidation } from '../../services/formValidation';

const Newsletter = ({type}) => {
  const { t } = useTranslation();
  const { add, isProcessing } = useNewsletter();
  const { lessThan } = useResponsive();
  const isFullWidth = (type === "full" || type === "modal" || lessThan.medium);
  const nameField = <Field name="name" width={isFullWidth ? "calc(100% - 40px)" : "calc(50% - 40px)"} component={TextInputAdapter} type="text" placeholder={t("form.name")} withBorder/>;
  const emailField = <Field name="email" width={isFullWidth ? "calc(100% - 40px)" : "calc(50% - 40px)"} component={TextInputAdapter} type="text" placeholder={t("form.email")} withBorder/>
  const addRecipient = ({name, email}) => {
      add(name, email);
    }
  const layout = {
    full: <FullNewsletterLayout
      name={nameField}
      email={emailField}
      privacyLabel={t("newsletter.privacy")}
      submitLabel={isProcessing ? <ClipLoader size={15} color='black'/> : t("newsletter.sign-up")}
      description={t("newsletter.description")}
      heading={t("newsletter.heading")}
      isProcessing={isProcessing}
    />,
    modal: <ModalNewsletterLayout
      name={nameField}
      email={emailField}
      privacyLabel={t("newsletter.privacy")}
      submitLabel={isProcessing ? <ClipLoader size={15} color='black'/> : t("newsletter.sign-up")}
      description={t("newsletter.description")}
      isProcessing={isProcessing}
    />
  }
  return (
    <Form
      onSubmit={addRecipient}
      validate={newsletterValidation}
      render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
          {layout[type] ||
            <NewsletterLayout
              name={nameField}
              email={emailField}
              privacyLabel={t("newsletter.privacy")}
              submitLabel={isProcessing ? <ClipLoader size={15} color='black'/> : t("newsletter.sign-up")}
              description={t("newsletter.description")}
              isProcessing={isProcessing}
            />
          }
      </form>
      )}
    />
  );
};

export default Newsletter;
