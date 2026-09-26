import Joi from "joi";

export const calendarQuerySchema = Joi.object({
    startDate: Joi.date().iso().required(),

    endDate: Joi.date().iso().required(),

    categoryId: Joi.string()
        .hex()
        .length(24),

    status: Joi.string().valid(
        "pending",
        "in-progress",
        "completed"
    ),
});