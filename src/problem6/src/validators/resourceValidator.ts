import Joi from 'joi';

export const resourceValidator = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Name must be a string',
    'any.required': 'Name is required',
  }),
  description: Joi.string().messages({
    'string.base': 'Description must be a string',
  }),
});
