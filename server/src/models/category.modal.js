import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            index: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50,
        },

        color: {
            type: String,
            required: true,
            match: /^#[0-9A-Fa-f]{6}$/,
        },

        icon: {
            type: String,
            default: "",
            maxlength: 50,
        },
    },
    {
        timestamps: true,
    }
);

categorySchema.index(
    { userId: 1, name: 1 },
    { unique: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;