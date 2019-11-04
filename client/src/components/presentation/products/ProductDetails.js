import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import withResponsive from '../../HOCs/withResponsive';
//import { Form, Field } from 'react-final-form';

//import ProductSpecs from './ProductSpecs';
import AddToCart from '../../presentation/global/AddToCart';
//import { RadioGroupAdapter } from '../../utils/Forms/FormHelpers';

import { Heading, Text, Button, Box, Tabs, Tab } from 'grommet';

import { productDetailsLayout } from '../../layouts/globalResponsiveLayout';

const ProductDetails = ({id, name, slug, price, currency, type, media, t}) => {
    /*const onSubmit = values => {
        product_type === 'coffee' ? derived(rest.slug, values) : add(id, '1')
    }*/
    const identifier = `products:${type}.${slug}`;
    const layout = productDetailsLayout(media)
    const isMobile = media === "small" || media === "extraSmall";
    const displayCurr = currency.toLowerCase();
    return (
        <Fragment>
            <Heading level={1} size={layout.size} margin={layout.margin}>{t(`${identifier}.name`)}</Heading>
            {type === 'coffee' &&
            <Heading level={3} size={layout.size} margin={layout.margin}>{`${t(`${identifier}.region`)}, ${t(`${identifier}.country`)} | ${t(`${identifier}.roast`)} Roast`}</Heading>
            }
            <Text size={layout.size} margin={layout.margin} style={{fontSize: '16px'}}>{`${type === "coffee" ? "From " : ""}${price[displayCurr].symbol}${price[displayCurr].value.toFixed(2)}`}</Text>
            <Tabs justify="start" margin={layout.margin}>
                <Tab title={t("sections.product.description")}>
                    <Text margin={{"bottom": "medium"}}>{t(`${identifier}.description`)}</Text>
                    {/*type === 'coffee' &&
                        <ProductSpecs
                            recommendation={t(`${identifier}.drink`)}
                            process={t(`${identifier}.process`)}
                            harvest={t(`${identifier}.harvest`)}
                            altitude={t(`${identifier}.altitude`)}
                            tasting_notes={t(`${identifier}.taste`)}
                        />
        */}
                </Tab>
                {type === "equipment" &&
                (<Tab title={t("sections.product.details")}>
                    {t(`${identifier}.details`).split(";").map((detail, index) => (
                        <Text key={`${index}${detail.slice(0,5)}`}>{`- ${detail}\n`}</Text>
                    ))}
                </Tab>)
                }
            </Tabs>
            
            {/*<Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, invalid, pristine, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                        {product_type === 'coffee' &&
                        <Box pad={layout.margin}>
                            <Field 
                                name="quantity"
                                component={RadioGroupAdapter}
                                options={[{"label": "250g","value": "250g"},{"label": `500g ${t(`${identifier}.500${currency}`)}`,"value": "500g"},{"label": `1kg ${t(`${identifier}.1000${currency}`)}`,"value": "1kg"}]}
                                style={{flexDirection: layout.formDir, justifyContent: 'space-between'}}
                            />
                        </Box>
                        }
                        <Box>
                        <Button type="submit" disabled={submitting || invalid} primary alignSelf={isMobile ? "center" : "start"} label="Add to Cart" color="mainDark" />
                        </Box>
                    </form>
            )}
                    />*/}
                    <AddToCart
                        id={id}
                        name={name}
                        slug={slug}
                        price={price}
                        //url={"https://581ce3d7.ngrok.io/"}
                        alignSelf={isMobile ? "center" : "start"}
                        pad="small"
                        margin="none"
                    >
                        ADD TO CART
                    </AddToCart>
        </Fragment>
    );
};

export default withTranslation()(withResponsive(ProductDetails));