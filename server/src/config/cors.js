import env from "./env.js";

const corsOptions = {
    origin: env.frontendUrl,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

export { corsOptions };
