import React from 'react';
import { Form, Field } from 'react-final-form';
import withResponsive from '../../HOCs/withResponsive';
import { withTranslation } from 'react-i18next';

import AddToCart from '../../containers/cart/AddToCartContainer';
import { RadioGroupAdapter } from '../../utils/Forms/FormHelpers';

import { productDetailsLayout } from '../../layouts/globalResponsiveLayout';

import { Box } from 'grommet';

const WeightSelectionForm = ({productId, options, hasOptions, media, t}) => {
    const layout = productDetailsLayout(media);
    const isMobile = media === "small" || media === "extraSmall";
    return (
        <Form
            onSubmit={values => console.log(values)}
            render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
            <form onSubmit={handleSubmit}>
                {options && options.length > 0 &&
                <Box pad={layout.margin}>
                    <Field 
                        name="quantity"
                        component={RadioGroupAdapter}
                        options={options}
                        style={{flexDirection: layout.formDir, justifyContent: 'space-between'}}
                        />
                </Box>
                }
                <Box>
                    <AddToCart 
                        productId={productId}
                        selected={values}
                        alignSelf={isMobile ? "center" : "start"}
                        pad="small"
                        margin="none"
                    >
                        {t("sections.cart.order.add")}
                    </AddToCart>
                </Box>
            </form>
            )}
        />
    );
};

export default withTranslation()(withResponsive(WeightSelectionForm));