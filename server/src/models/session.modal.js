import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        refreshTokenHash: {
            type: String,
            required: true,
        },

        expiresAt: {
            type: Date,
            required: true,
            index: true,
        },

        userAgent: {
            type: String,
            default: "",
        },

        ipAddress: {
            type: String,
            default: "",
        },
    },
    {
        timestamps: true,
    }
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;