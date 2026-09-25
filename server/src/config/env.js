import dotenv from "dotenv";

dotenv.config();

const env = {
    port: process.env.PORT || 3000,
    databaseUri: process.env.MOGODBURI || "",
    node_env: process.env.NODE_ENV || "development",
    frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
};

export default env;
