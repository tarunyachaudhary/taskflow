/**
#This is one of the most important files for TaskFlow.

    //It validates:
    ---> Creating tasks
    ---> Updating tasks
    ---> Filtering tasks
 */

import Joi from "joi"

const createTaskSchema = Joi.object({
    title: Joi.string()
        .min(1)
        .max(200)
        .trim()
        .required(),

    description: Joi.string()
        .max(2000)
        .allow("")
        .optional(),

    priority: Joi.string()
        .valid("low", "medium", "high")
        .default("medium"),

    categoryId: Joi.string()
        .optional(),

    dueDate: Joi.date()
        .iso()
        .optional(),
});

const updateTaskSchema = Joi.object({
    title: Joi.string()
        .min(1)
        .max(200)
        .trim(),

    description: Joi.string()
        .max(2000)
        .allow(""),

    priority: Joi.string()
        .valid("low", "medium", "high"),

    categoryId: Joi.string(),

    dueDate: Joi.date()
        .iso()
        .allow(null),

    completed: Joi.boolean(),
});

const taskQuerySchema = Joi.object({
    status: Joi.string()
        .valid("all", "active", "completed")
        .default("all"),

    priority: Joi.string()
        .valid("low", "medium", "high"),

    categoryId: Joi.string(),

    search: Joi.string()
        .allow(""),

    page: Joi.number()
        .integer()
        .min(1)
        .default(1),

    limit: Joi.number()
        .integer()
        .min(1)
        .max(100)
        .default(20),
});

module.exports = {
    createTaskSchema,
    updateTaskSchema,
    taskQuerySchema,
};