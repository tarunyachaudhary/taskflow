import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        type: {
            type: String,
            enum: [
                "task-reminder",
                "task-completed",
                "weekly-summary",
                "system",
            ],
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },

        message: {
            type: String,
            required: true,
            maxlength: 1000,
        },

        isRead: {
            type: Boolean,
            default: false,
        },

        taskId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

notificationSchema.index({
    userId: 1,
    isRead: 1,
    createdAt: -1,
});

const Notification = mongoose.model(
    "Notification",
    notificationSchema
);

export default Notification;