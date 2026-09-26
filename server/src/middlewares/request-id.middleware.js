import { randomUUID } from "crypto";

const requestIdMiddleware = (req, res, next) => {
    const requestId =
        req.headers["x-request-id"] || randomUUID();

    req.requestId = requestId;

    res.setHeader(
        "X-Request-ID",
        requestId
    );

    next();
};

export default requestIdMiddleware;