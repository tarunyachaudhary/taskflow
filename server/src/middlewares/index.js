// Re-export middleware
// to make imports easier throughout the application.

export { default as authMiddleware } from "./auth.middleware.js";
export { default as optionalAuthMiddleware } from "./optional-auth.middleware.js";
export { default as rateLimitMiddleware } from "./rate-limit.middleware.js";
export { default as validationMiddleware } from "./validation.middleware.js";
export { default as errorMiddleware } from "./error.middleware.js";
export { default as notFoundMiddleware } from "./not-found.middleware.js";
export { default as requestIdMiddleware } from "./request-id.middleware.js";
export { default as loggerMiddleware } from "./logger.middleware.js";