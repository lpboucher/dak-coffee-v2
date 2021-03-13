import IsEmail from 'validator/lib/isEmail'

export const newsletterValidation = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  }

  if (
    values.email &&
    !IsEmail(values.email)
  ) {

    errors.email = 'Provide a valid email'
  }


  return errors
}
