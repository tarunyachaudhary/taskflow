import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        theme: {
            type: String,
            enum: ["light", "dark", "system"],
            default: "dark",
        },

        language: {
            type: String,
            default: "en",
        },

        timezone: {
            type: String,
            default: "UTC",
        },

        notifications: {
            email: {
                type: Boolean,
                default: true,
            },

            push: {
                type: Boolean,
                default: true,
            },

            taskReminders: {
                type: Boolean,
                default: true,
            },

            weeklySummary: {
                type: Boolean,
                default: true,
            },
        },

        defaultTaskPriority: {
            type: String,
            enum: ["low", "medium", "high"],
            default: "medium",
        },
    },
    {
        timestamps: true,
    }
);

const Settings = mongoose.model(
    "Settings",
    settingsSchema
);

export default Settings;