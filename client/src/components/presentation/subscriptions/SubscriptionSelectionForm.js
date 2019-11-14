import React, { Fragment } from 'react';
import { Form, Field } from 'react-final-form';
import { withTranslation } from 'react-i18next';

import { SelectAdapter } from '../../utils/Forms/FormHelpers';

import AddToCart from '../../containers/cart/AddToCartContainer';

import { Box } from "grommet";

const required = value => (value ? undefined : "Please select all options");

const SubscriptionForm = ({ id, withAllOptions, t}) => {
    return (
    <Form
    onSubmit={values => console.log(values)}
    render={({ values }) => (
      <form>
        <Box width="75%" pad={{vertical: 'medium'}}>
          {withAllOptions && 
          <Fragment>
            <Field
              label={`${t("sections.subscription.form.varieties.label")}`}
              name="varieties"
              component={SelectAdapter}
              size="small"
              options={['1', '2']}
              placeholder={`${t("sections.subscription.form.varieties.placeholder")}`}
              validate={required}
            />
            <Field
              label={`${t("sections.subscription.form.roast.label")}`}
              name="roast"
              component={SelectAdapter}
              size="small"
              options={['espresso', 'filter']}
              placeholder={`${t("sections.subscription.form.roast.placeholder")}`}
              validate={required}
            />
          </Fragment>
          }
          <Field label={`${t("sections.subscription.form.quantity.label")}`} name="quantity" component={SelectAdapter} size="small" options={['500g', '1kg']} placeholder={`${t("sections.subscription.form.quantity.placeholder")}`} validate={required}/>
          <AddToCart
                subscriptionId={id}
                selected={values}
                data-item-payment-interval="Month"
                data-item-payment-interval-count="1"
                fill="horizontal"
                pad="small"
                margin="none"
            >
                {t("sections.subscription.button")}
            </AddToCart>
        </Box>
      </form>
    )}
  />
    )
};

export default withTranslation()(SubscriptionForm);