export const EmailValidator = [
  {
    required: true,
    message: 'Email is required'
  },
  {
    type: 'email',
    message: 'Incorrect email'
  },
]

export const PasswordValidator = [
  {
    required: true,
    message: 'Password is required'
  },
  {
    type: 'string',
  },
  {
    min: 6,
    message: 'Min length 6'
  }
]
