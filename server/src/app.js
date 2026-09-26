import express from "express";
import cors from "cors";
import { connectDatabase, corsOptions, env, securityConfig } from "./config/index.js";
import logger from "./utils/logger.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";

const app = express();

// middlewares
app.use(cors(corsOptions));
app.use(securityConfig);
app.use(express.json());
app.use(loggerMiddleware);
app.use(errorMiddleware);

const startServer = async () => {
    try {
        await connectDatabase();

        const server = app.listen(env.port, () => {
            logger.info(`Server is running on port ${env.port}`);
        });

        const shutdownServer = (signal) => {
            logger.info(`${signal} received. Shutting down server...`);

            server.close(() => {
                logger.info("Server has been closed");
                process.exit(0);
            });
        };

        process.on("SIGINT", () => shutdownServer("SIGINT"));
        process.on("SIGTERM", () => shutdownServer("SIGTERM"));

    } catch (err) {
        logger.error("Failed to start server", err);
        process.exit(1);
    }
};

export default startServer;
