import React from 'react';
import { useSelector } from 'react-redux';
import { getDisplayCurrency } from '../../../ducks/views';
import { withTranslation } from 'react-i18next';

import { Form } from 'react-final-form';
import { Box, Heading } from 'grommet';

import FormFieldHelperText from '../../utils/Forms/FormFieldHelperText';
import SubscriptionSelectionButton from './SubscriptionSelectionButton';
import AddToCart from '../../containers/cart/AddToCartContainer';

const SubscriptionSelection = ({t}) => {
    const currency = useSelector(state => getDisplayCurrency(state));
    const prices = {'500g':{EUR: '€23', CAD: '$37'}, '1kg':{EUR: '€40', CAD: '$59'}};
    const quantities = {
        '500g': ['500g',prices['500g'][currency],t("sections.subscription.form.permonth"),t("sections.subscription.form.shipping")],
        '1kg': ['1kg',prices['1kg'][currency],t("sections.subscription.form.permonth"),t("sections.subscription.form.shipping")]
    }
    return (
    <Box margin={{vertical: 'large'}}>
        <Form
            onSubmit={values => console.log(values)}
            render={({ values }) => (
            <form>
                <Heading>{t("sections.subscription.form.title")}</Heading>
                    <Box pad={{vertical: 'medium'}}>
                        <FormFieldHelperText text={t("sections.subscription.form.quantity.helper")}/>
                        <Box direction="row" margin={{vertical: 'small'}}>
                            <SubscriptionSelectionButton name="quantity" value="500g" label={quantities['500g']} width="50%"/>
                            <SubscriptionSelectionButton name="quantity" value="1kg" label={quantities['1kg']} width="50%"/>
                        </Box>
                    </Box>
                    {values.quantity &&
                    <Box pad={{vertical: 'medium'}}>
                        <FormFieldHelperText text={t("sections.subscription.form.varieties.helper")}/>
                        <Box direction="row" margin={{vertical: 'small'}}>
                            <SubscriptionSelectionButton name="varieties" value="1" width="50%"/>
                            <SubscriptionSelectionButton name="varieties" value="2" width="50%"/>
                        </Box>
                    </Box>
                    }
                    {values.varieties &&
                    <Box pad={{vertical: 'medium'}}>
                        <FormFieldHelperText text={t("sections.subscription.form.roast.helper")}/>
                        <Box direction="row" margin={{vertical: 'small'}}>
                            <SubscriptionSelectionButton name="roast" value="espresso" width="50%"/>
                            <SubscriptionSelectionButton name="roast" value="filter" width="50%"/>
                            <SubscriptionSelectionButton name="roast" value="all" label={t("sections.subscription.form.both")} width="50%"/>
                        </Box>
                    </Box>
                    }
                    {values.roast &&
                    <AddToCart
                        subscriptionId={'5e3d7f3219714cd12218ed3a'}
                        selected={values}
                        data-item-payment-interval="Month"
                        data-item-payment-interval-count="1"
                        fill="horizontal"
                        pad="small"
                        margin="none"
                    >
                        {t("sections.subscription.button")}
                    </AddToCart>
                    }
            </form>
            )}
        />
    </Box>
    );
};

export default withTranslation()(SubscriptionSelection);