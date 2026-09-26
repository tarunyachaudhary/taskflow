import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logsDirectory = path.join(__dirname, "../logs");

if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory, { recursive: true });
}

const appLogFile = path.join(logsDirectory, "app.log");
const errorLogFile = path.join(logsDirectory, "error.log");
const accessLogFile = path.join(logsDirectory, "access.log");

const getTimestamp = () => {
    return new Date().toISOString();
};

const writeLog = (file, level, message) => {
    const logMessage = `${getTimestamp()} [${level}] ${message}\n`;

    fs.appendFileSync(file, logMessage);
};

const logger = {
    info(message) {
        writeLog(appLogFile, "INFO", message);
    },

    warn(message) {
        writeLog(appLogFile, "WARN", message);
    },

    error(message, error = null) {
        let logMessage = message;

        if (error) {
            logMessage += `\n${error.stack || error.message || error}`;
        }

        writeLog(errorLogFile, "ERROR", logMessage);
    },

    access(message) {
        writeLog(accessLogFile, "ACCESS", message);
    },
};

export default logger;
