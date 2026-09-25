import express from "express";
import cors from "cors";
import { connectDatabase, corsOptions, env, securityConfig } from "./config/index.js";

const app = express();

app.use(cors(corsOptions));
app.use(securityConfig);
app.use(express.json());

const startServer = async () => {
    try {
        await connectDatabase();

        app.listen(env.port, () => {
            console.log(`Server is running on port ${env.port}`);
        });
    } catch (err) {
        console.error("Failed to start server:", err);
        process.exit(1);
    }
};

export default startServer;
