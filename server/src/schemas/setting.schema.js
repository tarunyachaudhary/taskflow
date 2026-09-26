import Joi from "joi";

export const updateSettingsSchema = Joi.object({
    theme: Joi.string()
        .valid("light", "dark", "system"),

    language: Joi.string()
        .valid("en"),

    timezone: Joi.string().trim().max(100),

    notifications: Joi.object({
        email: Joi.boolean(),

        push: Joi.boolean(),

        taskReminders: Joi.boolean(),

        weeklySummary: Joi.boolean(),
    }),

    defaultTaskPriority: Joi.string()
        .valid("low", "medium", "high"),
}).min(1);