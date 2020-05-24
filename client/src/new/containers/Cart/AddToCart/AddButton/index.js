import React from 'react';
import { useSelector } from 'react-redux';
import { isAdding } from '../../../../../ducks/views';

import AddButton from '../../../../components/Cart/AddToCart/AddButton';

const AddButtonContainer = ({id}) => {
  const { adding, productId } = useSelector(state => isAdding(state));
  return (
      <AddButton isAdding={adding && productId === id}/>
  );
};

export default AddButtonContainer;
