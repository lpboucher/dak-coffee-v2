import React from 'react';

import ClipLoader from 'react-spinners/ClipLoader';
import { Add } from 'grommet-icons';


const AddButton = ({isAdding}) => {
  return (
      <>
        {isAdding ?
          <ClipLoader size={12} color='white'/>
          :
          <Add size="small" />
        }
      </>
  );
};

export default AddButton;
