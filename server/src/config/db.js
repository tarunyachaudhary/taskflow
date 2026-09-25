import mongoose from "mongoose";
import env from "./env.js";

const connectDB = async () => {
    if (!env.databaseUri) {
        throw new Error("MOGODBURI is not set in the environment");
    }

    await mongoose.connect(env.databaseUri);
    console.log("Database connected successfully!");
};

export default connectDB;
