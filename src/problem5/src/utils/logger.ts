import { createLogger, format, transports} from "winston";

const logger = createLogger({
    level: "info",
    format: format.combine(
        format.colorize(),
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
    ),
    transports: [
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.Console()
    ],
});

export default logger;