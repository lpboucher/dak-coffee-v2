import React from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';
import { FormField, TextInput, RadioButton, RadioButtonGroup, CheckBox, Select } from "grommet";

const StyledFormField = styled(FormField)`
  border-bottom: ${({withBorder}) => withBorder ? '0px solid white' : 'none'};
  margin: 20px;
`;

export const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  )

export const TextInputAdapter = ({ input: {name, onChange, value, ...restInput}, meta, placeholder, ...rest }) => (
    <StyledFormField error={meta.modified && meta.error ? meta.error : ""} {...rest} >
        <TextInput
        {...restInput}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        />
    </StyledFormField>
)

export const RadioAdapter = ({ input: {checked, name, onChange, value, ...restInput}, meta, label,...rest }) => (
    <FormField error={meta.modified && meta.error ? meta.error : ""} {...rest}>
        <RadioButton
        {...restInput}
        label={label}
        checked={checked}
        name={name}
        onChange={onChange}
        value={value}
        />
    </FormField>
)

export const RadioGroupAdapter = ({ input: {checked, name, onChange, value, ...restInput}, options, meta, label, placeholder, ...rest }) => (
  <FormField error={meta.modified && meta.error ? meta.error : ""} {...rest} style={{width: '80%'}}>
      <RadioButtonGroup
      {...restInput}
      placeholder={placeholder}
      label={label}
      checked={checked}
      name={name}
      options={options}
      onChange={onChange}
      value={value}
      style={rest.style}
      />
  </FormField>
)

export const CheckboxAdapter = ({ input: {checked, name, onChange, value, ...restInput}, meta, label,...rest }) => (
        <CheckBox
        toggle
        {...restInput}
        label={label}
        checked={checked}
        name={name}
        onChange={onChange}
        />
)

export const SelectAdapter = ({ input: {name, onChange, value, ...restInput}, options, margin, meta, label, placeholder, ...rest }) => (
  <FormField label={label} error={meta.modified && meta.error ? meta.error : ""} {...rest}>
      <Select
      {...restInput}
      placeholder={placeholder}
      name={name}
      onChange={({ option }) => onChange(option)}
      value={value}
      options={options}
      margin={margin}
      focusIndicator={false}
      />
  </FormField>
)
