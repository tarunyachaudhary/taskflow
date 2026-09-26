import logger from "../utils/logger.js";

const loggerMiddleware = (req, res, next) => {
    const startTime = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - startTime;

        const message = [
            req.ip,
            req.method,
            req.originalUrl,
            res.statusCode,
            `${duration}ms`,
            `"${req.get("user-agent") || "-"}"`,
        ].join(" ");

        logger.access(message);
    });

    next();
};

export default loggerMiddleware;