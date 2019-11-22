import React from 'react';
import { withTranslation } from 'react-i18next';

import ProductSpecs from './ProductSpecs';
import ProductDetailsLayout from '../../layouts/ProductDetailsLayout';
import WeightSelectionForm from '../../presentation/products/WeightSelectionForm';

import { Text, Tab } from 'grommet';

const ProductDetails = ({id, name, slug, price, currency, type, media, t}) => {
    const identifier = `products:${type}.${slug}`;
    const isCoffee = type === 'coffee';
    const isEquipment = type === "equipment";
    const displayCurr = currency.toLowerCase();
    const formOptions = {
        'coffee': [
            {"label": "250g","value": "250g"},
            {"label": `500g ${t(`${identifier}.500${currency}`)}`,"value": "500g"},
            {"label": `1kg ${t(`${identifier}.1000${currency}`)}`,"value": "1kg"}
        ], 
        'christmas-espresso': [
            {"label": "Esperanza","value": "Esperanza"},
            {"label": "Blend 108","value": "Blend 108"},
            {"label": "Esperanza+Blend","value": "Both"},
        ], 
        'christmas-filter': [
            {"label": "Rutabo","value": "Rutabo"},
            {"label": "Chelelektu","value": "Chelelektu"},
            {"label": "Rutabo+Chelelektu","value": "Both"},
        ],
        'equipment': [],
        'christmas': []
    }
    return (
        <>
            <ProductDetailsLayout
                heading={t(`${identifier}.name`)}
                hasSubHeading={isCoffee}
                subHeading={`${t(`${identifier}.region`)}, ${t(`${identifier}.country`)} | ${t(`${identifier}.roast`)} Roast`}
                price={`${isCoffee ? t("sections.product.price") : ""}${price[displayCurr].symbol}${price[displayCurr].value.toFixed(2)}`}
            >
                <Tab title={t("sections.product.description")}>
                <Text margin={{"bottom": "medium"}}>{t(`${identifier}.description`)}</Text>
                {isCoffee &&
                    <ProductSpecs
                        recommendation={`${t("sections.product.recommendation")} ${t(`${identifier}.drink`)}`}
                        process={t(`${identifier}.process`)}
                        harvest={t(`${identifier}.harvest`)}
                        altitude={t(`${identifier}.altitude`)}
                        tasting_notes={t(`${identifier}.taste`)}
                        recyclable={t(`sections.product.recyclable`)}
                    />
                }
                </Tab>
                {isEquipment &&
                    <Tab title={t("sections.product.details")}>
                        {t(`${identifier}.details`).split(";").map((detail, index) => 
                            <Text key={`${index}${detail.slice(0,5)}`}>{`- ${detail}\n`}</Text>
                        )}
                    </Tab>
                }
            </ProductDetailsLayout>
            <WeightSelectionForm
                productId={id}
                options={formOptions[type]}
            />
        </>
    );
};

export default withTranslation()(ProductDetails);