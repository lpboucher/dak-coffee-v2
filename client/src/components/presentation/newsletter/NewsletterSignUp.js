import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import NewsletterFormLayout from '../../layouts/NewsletterFormLayout';
import NewsletterLayout from '../../layouts/NewsletterLayout';

import { TextInputAdapter } from '../../utils/Forms/FormHelpers';
import validation from '../../utils/Forms/newsletterValidation';

import { Text, Button } from 'grommet';

const NewsletterSignUp = ({addToNewsletter, t, message, isFull=false}) => {
    const add = (values) => {
        addToNewsletter(values.name, values.email);
      }
    return ( 
        <NewsletterLayout isFull={isFull} form={
            <Form
                onSubmit={add}
                validate={validation}
                render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                <form onSubmit={handleSubmit}>
                    <NewsletterFormLayout
                        nameField={
                            <Field
                                name='name'
                                component={TextInputAdapter}
                                type="text"
                                placeholder={t("newsletter.form.name")}
                            />
                        }
                        emailField={
                            <Field
                                name='email'
                                component={TextInputAdapter}
                                type="text"
                                placeholder={t("newsletter.form.email")}
                            />
                        }
                        link={<Link to="/privacy"><Text size="xsmall">{t("newsletter.privacy")}</Text></Link>}
                        button={<Button type="submit" label={t("newsletter.button")} color="mainWhite" alignSelf="start" style={{fontSize: '10px', lineHeight: '10px'}}/>}
                        isFull={isFull}
                    />
                </form>
                )}
            />
        }>
            {isFull ? 
            <Text size={"20px"} weight={"bold"} textAlign="start" style={{lineHeight: '32px'}}>{t("newsletter.full")}</Text>
            :
            <Text textAlign="center">{t("newsletter.description")}</Text>
            }
            <Text textAlign="center" color="red">{t(message.newsletter)}</Text>
        </NewsletterLayout>
    );
};

export default withTranslation()(NewsletterSignUp);