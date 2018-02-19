const winston = require("winston"),
  moment = require("moment"),
  fs = require('fs');

const logLevel = process.env.LOG_LVL || "debug";
const env = process.env.NODE_ENV || "development";
const logger = new winston.Logger();

logger.add(winston.transports.Console, {
  colorize: true, 
  level: logLevel, 
  handleExceptions: true,
  humanReadableUnhandledException: true
});

if (env === "development") {
  var logPath = process.env.LOG_PATH || 'logs';

  if (!fs.existsSync(logPath)) {
    try {
      fs.mkdirSync(logPath);

      logger.add(winston.transports.File, {
        filename: `${logPath}/logger.log`, 
        level: logLevel, 
        maxsize: 5242880, 
        maxFiles: 10,
        handleExceptions: true,
        humanReadableUnhandledException: true
      });
    } catch(err) {
      logger.error(err.message);
    }
  }

}

module.exports = logger;