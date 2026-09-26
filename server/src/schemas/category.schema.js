import Joi from "joi";

export const createCategorySchema = Joi.object({
    name: Joi.string().trim().min(1).max(50).required(),

    color: Joi.string()
        .pattern(/^#[0-9A-Fa-f]{6}$/)
        .required(),

    icon: Joi.string().trim().max(50).allow(""),
});

export const updateCategorySchema = Joi.object({
    name: Joi.string().trim().min(1).max(50),

    color: Joi.string()
        .pattern(/^#[0-9A-Fa-f]{6}$/),

    icon: Joi.string().trim().max(50).allow(""),
}).min(1);