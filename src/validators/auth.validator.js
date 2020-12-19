export const EmailValidator = {
  required: true,
  minLength: 3,
  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
}

export const PasswordValidator = {
  required: true,
  minLength: 6
}
