/**

# This handles authentication data:

---> Register
---> Login
---> Forgot password
---> Reset password
---> Refresh token
 */

const Joi = require("joi");

const registerSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .trim()
        .required(),

    email: Joi.string()
        .email()
        .lowercase()
        .trim()
        .required(),

    password: Joi.string()
        .min(8)
        .max(100)
        .required(),
});

const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .lowercase()
        .trim()
        .required(),

    password: Joi.string()
        .required(),
});

const forgotPasswordSchema = Joi.object({
    email: Joi.string()
        .email()
        .lowercase()
        .trim()
        .required(),
});

const resetPasswordSchema = Joi.object({
    token: Joi.string()
        .required(),

    password: Joi.string()
        .min(8)
        .max(100)
        .required(),
});

const refreshTokenSchema = Joi.object({
    refreshToken: Joi.string()
        .required(),
});

module.exports = {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    refreshTokenSchema,
};