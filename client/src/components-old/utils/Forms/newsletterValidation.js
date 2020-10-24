import IsEmail from 'validator/lib/isEmail'

const newsletterValidation = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  }

  if (values.name && values.name.split(' ').length < 2) {
    errors.name = 'Please provide full name'
  }

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

export default newsletterValidation