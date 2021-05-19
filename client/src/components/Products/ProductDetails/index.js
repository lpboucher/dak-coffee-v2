import React from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { useQuery } from '../../../hooks/utils/useQuery';
import { useResponsive } from '../../../hooks/utils/useResponsive';
import { useCurrency } from '../../../hooks/global/useCurrency';
import { useCart } from '../../../hooks/cart/useCart';
import { useSingleProduct } from '../../../hooks/products/useProducts';

import { ReactComponent as Bean} from '../../../assets/icons/coffeebean.svg';
import { ReactComponent as Altitude} from '../../../assets/icons/altitude.svg';
import { ReactComponent as Packaging} from '../../../assets/icons/packaging.svg';

import AddToCart from '../../Cart/AddProduct';
import { FormFieldRadioButton, FormFieldQuantityInput } from '../../../utils/forms/FormElements';
import ProductDetailsLayout, { AddButton, PriceBox } from '../../../layouts/Products/ProductDetails';

import { Box } from 'grommet';

import { layout } from '../../../layout';

const {
  cartButtonWidth,
} = layout;

const ProductDetails = ({id}) => {
  const { query: quantityQuery } = useQuery("quantity");
  const { query: roastQuery } = useQuery("roast");
  const { t } = useTranslation();
  const { mediaType } = useResponsive();
  const { currencySymbol } = useCurrency();
  const { productAdding } = useCart(id);
  const {
    type,
    staticPrice,
    cartPrice,
    displayedTitle,
    displayedDescription,
    hasPriceOptions,
    additionalOptions,
    characteristics,
    longDescription,
    tastingNotes,
    slug
  } = useSingleProduct(id);
  const dropdowns = type === "coffee" ?
    [
      {type: "iconed", title: t(`dropdown.${type}-tasting`), content: tastingNotes, direction: "row" },
      {type: "iconed", title: t(`dropdown.${type}-characteristics`), content: [
        { icon: <Bean width="30px" />, label: characteristics.bean },
        { icon: <Altitude width="30px" />, label: characteristics.altitude },
        {icon: <Packaging width="30px" />, label: characteristics.packaging },
      ]},
      {type: "simple", title: t(`dropdown.${type}`), content: longDescription}
    ]
  :
    [
      {type: "simple", title: t(`dropdown.${type}`), content: longDescription},
    ];
    // temp button for pre-order cold brew
    const addLabel = id === "608ebd5c8e9a182d5e36b8d9" ? t(`cart.pre-order`) : t(`cart.add`);
    const defaultCoffee = type === "coffee" && slug === "test-batch" ? "1kg" : "250g";
    const defaultQuantity = type === "promo" ? "25€" : defaultCoffee;
  return (
    <ProductDetailsLayout
      title={displayedTitle}
      staticPrice={staticPrice}
      description={displayedDescription}
      infoDropdowns={dropdowns}
      form={
        <Form
  onSubmit={values => console.log(values)}
  initialValues={{
    number: 1,
    quantity: hasPriceOptions && quantityQuery.length > 0 ? quantityQuery[0] : defaultQuantity,
    roast: roastQuery.length > 0 ? roastQuery[0] : null,
  }}
  render={({ values }) => (
    <form>
      {hasPriceOptions &&
        <Box pad={{horizontal: "small", top: "medium"}} direction="row" justify="start">
          {Object.keys(cartPrice).map(oneQuantity =>
            <FormFieldRadioButton
            key={oneQuantity}
            id={oneQuantity}
            name="quantity"
            value={oneQuantity}
            label={oneQuantity}
            width="160px"
            />
          )}
        </Box>
      }
      {additionalOptions.map(mainOption =>
        <Box key={`${mainOption.name}`} pad={{horizontal: "small", top: "medium"}} direction="row" justify="start">
          {mainOption.options.map(option =>
            <FormFieldRadioButton
            key={`${mainOption.name}_${option.label}`}
            name={mainOption.name}
            value={option.value}
            label={option.label}
            width="200px"
            />
          )}
        </Box>
      )}
      <Box pad={{horizontal: "small", top: "medium"}} width="fit-content">
        <FormFieldQuantityInput name="number" width="118px"/>
      </Box>
      <Box pad={{horizontal: "small", top: "medium"}} direction="row">
        <AddToCart
          productId={id}
          selected={values}
          addButton={
            <AddButton width={layout[`cartButtonWidth_${mediaType}`] || cartButtonWidth} primary label={productAdding ? t(`cart.adding`) : addLabel} type="submit"/>
          }
        />
        <PriceBox
          plain
          padding="small"
          align="center"
          justify="center"
          width="160px"
        >
          {`${currencySymbol} ${hasPriceOptions ?
            (cartPrice[values.quantity] * values.number).toFixed(2)
            :
            (cartPrice * values.number).toFixed(2)}`
          }
        </PriceBox>
      </Box>
    </form>
  )}
/>
      }
    />
  )
}


export default ProductDetails;

