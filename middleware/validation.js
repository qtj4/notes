const Joi = require('joi');

const schemas = {
    registration: Joi.object({
        username: Joi.string()
            .min(3)
            .max(30)
            .required()
            .messages({
                'string.min': 'Username must be at least 3 characters long',
                'string.max': 'Username cannot exceed 30 characters',
                'any.required': 'Username is required'
            }),
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.email': 'Please provide a valid email address',
                'any.required': 'Email is required'
            }),
        password: Joi.string()
            .min(6)
            .required()
            .messages({
                'string.min': 'Password must be at least 6 characters long',
                'any.required': 'Password is required'
            })
    }),

    login: Joi.object({
        email: Joi.string()
            .email()
            .required()
            .messages({
                'string.email': 'Please provide a valid email address',
                'any.required': 'Email is required'
            }),
        password: Joi.string()
            .required()
            .messages({
                'any.required': 'Password is required'
            })
    }),

    userUpdate: Joi.object({
        username: Joi.string()
            .min(3)
            .max(30)
            .messages({
                'string.min': 'Username must be at least 3 characters long',
                'string.max': 'Username cannot exceed 30 characters'
            }),
        email: Joi.string()
            .email()
            .messages({
                'string.email': 'Please provide a valid email address'
            }),
        password: Joi.string()
            .min(6)
            .messages({
                'string.min': 'Password must be at least 6 characters long'
            })
    })
};

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errors = error.details.map(detail => detail.message);
            return res.status(400).json({ errors });
        }

        next();
    };
};

module.exports = {
    validateRegistration: validateRequest(schemas.registration),
    validateLogin: validateRequest(schemas.login),
    validateUserUpdate: validateRequest(schemas.userUpdate)
};
