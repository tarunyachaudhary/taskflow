import jwt from "jsonwebtoken";
import env from "../config/env.js";

const optionalAuthMiddleware = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return next();
        }

        const [scheme, token] = authorization.split(" ");

        if (scheme !== "Bearer" || !token) {
            return next();
        }

        const decoded = jwt.verify(
            token,
            env.jwt.accessSecret
        );

        req.user = {
            id: decoded.userId,
        };

        next();
    } catch {
        req.user = null;
        next();
    }
};

export default optionalAuthMiddleware;