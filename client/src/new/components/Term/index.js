import React from 'react';
import { useTerm } from "../../hooks/terms/useTerms";

import TermLayout from '../../layouts/Term';

const Term = ({type}) => {
  const { title, contentByLine } = useTerm(type);
  return (
    <TermLayout
      title={title}
      textLines={contentByLine}
    />
  );
};

export default Term;
