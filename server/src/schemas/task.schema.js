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
        .hex()
        .length(24)
        .allow(null),

    dueDate: Joi.date()
        .iso()
        .optional(),
    
    status: Joi.string()
        .valid("pending", "in-progress", "completed")
        .default("pending"),
    
    reminderAt: Joi.date().iso().allow(null),
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

    categoryId: Joi.string()
        .hex()
        .length(24)
        .allow(null),

    dueDate: Joi.date()
        .iso()
        .allow(null),

    status: Joi.string().valid(
        "pending",
        "in-progress",
        "completed"
    ),
    reminderAt: Joi.date().iso().allow(null),
}).min(1);

const taskQuerySchema = Joi.object({
    status: Joi.string().valid(
        "pending",
        "in-progress",
        "completed"
    ),

    priority: Joi.string().valid(
        "low",
        "medium",
        "high"
    ),

    categoryId: Joi.string().hex().length(24),

    search: Joi.string().trim().max(100),

    page: Joi.number().integer().min(1).default(1),

    limit: Joi.number().integer().min(1).max(100).default(20),

    sortBy: Joi.string().valid(
        "createdAt",
        "updatedAt",
        "dueDate",
        "priority"
    ).default("createdAt"),

    sortOrder: Joi.string()
        .valid("asc", "desc")
        .default("desc"),
});

module.exports = {
    createTaskSchema,
    updateTaskSchema,
    taskQuerySchema,
};