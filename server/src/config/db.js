import mongoose from "mongoose";
import env from "./env.js";
import logger from "../utils/logger.js";

const connectDatabase = async () => {
    if (!env.databaseUri) {
        throw new Error("DATABASE_URI is not set in the environment");
    }

    await mongoose.connect(env.databaseUri);

    logger.info("Database connected successfully!");
};

export default connectDatabase;