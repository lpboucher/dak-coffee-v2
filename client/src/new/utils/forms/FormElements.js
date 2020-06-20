import React from 'react';
import styled from 'styled-components';

import { Field } from 'react-final-form';
import { Box, Text } from 'grommet';

export const FormFieldQuantityInput = ({name, ...rest}) => {
  return (
    <Field name={name} type="input">
      {({input: {name, value, onChange}}) => (
        <FormQuantityInput direction="row" align="center" justify="between" width={rest.width}>
          <QuantityButton disabled={value == 1} onClick={() => value != 1 && onChange(value - 1)}>-</QuantityButton>
          <QuantityInputField
            name={name}
            value={value}
            onChange={onChange}
            type="number"
            disabled
          />
          <QuantityButton onClick={() => onChange(value + 1)}>+</QuantityButton>
          </FormQuantityInput>
      )}
      </Field>
  );
};

export const FormFieldRadioButton = ({name, value, label, ...rest}) => {
  return (
      <Field name={name} type="radio" value={value}>
          {({input: {name, value, onChange, checked}}) => (
              <FormRadioButton
                  name={name}
                  value={value}
                  checked={checked}
                  onClick={() => onChange(value)}
                  align="center"
                  justify="center"
                  pad="xsmall"
                  width={rest.width}
              >
                <Text weight="bold">{label}</Text>
              </FormRadioButton>
          )}
      </Field>
  );
};

const FormRadioButton = styled(Box)`
    cursor: pointer;
    background-color: ${({checked}) => checked ? '#343434' : 'white'};
    border: 1px solid #343434;
    color: ${({checked}) => checked ? '#f7f8f9' : '#343434'};
    margin: 0 12px;

    &:first-of-type {
        margin-left: 0;
    }

    &:hover {
        background-color: ${({checked}) => !checked ? '#a96c35' : '#343434'};
    }
`

const FormQuantityInput = styled(Box)`
    color: ${({checked}) => checked ? '#f7f8f9' : '#343434'};
    border: 1px solid #343434;
    margin: 0 12px;
    padding: 6px;

    &:first-of-type {
        margin-left: 0;
    }
`

const QuantityInputField = styled.input`
    line-height: 28px;
    border: none;
    text-align: center;
    background: transparent;
`

const QuantityButton = styled.div`
    font-size: 28px;
    cursor: ${({disabled}) => disabled ? 'default': 'pointer'};
    color: ${({disabled}) => disabled ? 'grey': 'black'};
`
