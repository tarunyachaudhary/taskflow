// This validates user/profile updates.

import Joi from "joi";

const updateUserSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(50)
        .trim(),

    email: Joi.string()
        .email()
        .lowercase()
        .trim(),

    avatar: Joi.string()
        .uri(),
});

const changePasswordSchema = Joi.object({
    currentPassword: Joi.string()
        .required(),

    newPassword: Joi.string()
        .min(8)
        .max(100)
        .required(),
});

module.exports = {
    updateUserSchema,
    changePasswordSchema,
};