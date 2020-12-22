export const ProductValidateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!',
  },
  string: {
    range: '${label} must be between ${min} and ${max}',
    min: "${label} must be at least ${min} characters",
    max: '{label} cannot be longer than ${max} characters',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export const PhotoValidator = [
  {
    required: true,
    message: "Photo is required!"
  },
  {
    type: 'object'
  }
]

export const TitleValidator = [
  {
    required: true
  },
  {
    min: 20,
  },
  {
    max: 60
  }
]

export const DescriptionValidator = [
  {
    max: 200
  }
]

export const PriceValidator = [
  {
    required: true,
  }
]

export const DiscountValidator = []


export const DateEndDiscount = [
  {
    required: true
  }
]
