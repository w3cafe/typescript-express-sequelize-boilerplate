const winston = require("winston");
const { combine, timestamp, json, errors } = winston.format;

let logger = (global as any).logger;

if (!logger) {
  logger = winston.createLogger({
    level: "info",
    format: combine(errors({ stack: true }), timestamp(), json()),
    transports: [new winston.transports.Console()],
  });
  (global as any).logger = logger;
}

export default logger;
