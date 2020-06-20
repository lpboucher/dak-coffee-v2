import React from 'react';
import { Form } from 'react-final-form';

import { useCurrency } from '../../../hooks/global/useCurrency';
import { useCart } from '../../../hooks/cart/useCart';
import { useSingleProduct } from '../../../hooks/products/useProducts';

import AddToCart from '../../Cart/AddProduct';
import { FormFieldRadioButton, FormFieldQuantityInput } from '../../../utils/forms/FormElements';
import ProductDetailsLayout, { AddButton, PriceBox } from '../../../layouts/Products/ProductDetails';

import { Box } from 'grommet';

const SingleProduct = ({id}) => {
  const { currencySymbol } = useCurrency();
  const { productAdding } = useCart(id);
  const {
    type,
    staticPrice,
    cartPrice,
    displayedTitle,
    displayedDescription,
    displayedSubtitle
  } = useSingleProduct(id);
  const hasProductOptions = type === "coffee";
  return (
    <ProductDetailsLayout
      title={displayedTitle}
      staticPrice={staticPrice}
      description={displayedDescription}
      hasProductOptions={type === "coffee"}
      mainDropdown={displayedSubtitle}
      form={
        <Form
  onSubmit={values => console.log(values)}
  initialValues={
    !hasProductOptions ?
    {number: 1}
    :
    {quantity: "250g", number: 1}
  }
  render={({ values }) => (
    <form>
      {hasProductOptions &&
        <Box pad="small" direction="row" justify="between">
          <FormFieldRadioButton
            name="quantity"
            value="250g"
            label="250g"
            width="200px"
          />
          <FormFieldRadioButton
            name="quantity"
            value="500g"
            label="500g"
            width="200px"
          />
          <FormFieldRadioButton
            name="quantity"
            value="1kg"
            label="1kg"
            width="200px"
          />
        </Box>
      }
      <Box pad="small" width="fit-content">
        <FormFieldQuantityInput name="number" width="200px"/>
      </Box>
      <Box pad="small" direction="row">
        <AddToCart productId={id} selected={values} addButton={
          <AddButton primary label={productAdding ? "Adding..." : "Add to cart"} type="submit"/>
        }/>
        <PriceBox
          background="mainDark"
          padding="small"
          align="center"
          justify="center"
        >
          {`+ ${currencySymbol} ${hasProductOptions ?
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
      /*options={}
      characteristics={}
      more={}*/
    />
  )
}


export default SingleProduct;

