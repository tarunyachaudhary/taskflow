import logger from "../utils/logger.js";

const errorMiddleware = (err, req, res, next) => {
    logger.error(
        `${req.method} ${req.originalUrl} - ${err.message}`,
        err
    );

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal server error",
    });
};

export default errorMiddleware;