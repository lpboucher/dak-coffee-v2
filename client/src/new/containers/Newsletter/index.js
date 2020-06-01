import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToNewsletter } from '../../../ducks/user';
import { getError } from '../../../ducks/views';

import Newsletter from '../../components/Newsletter';

const NewsletterContainer = () => {
  const dispatch = useDispatch();

  const add = (name, email) => dispatch(addToNewsletter(name, email));

  const error = useSelector(state => getError(state));

  return (
      <Newsletter add={add} error={error}/>
  );
}

export default NewsletterContainer;
