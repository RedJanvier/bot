import winston from 'winston';

const logger = winston.createLogger({
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6,
  },
  format: winston.format.json(),
});

logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  }),
);

export default logger;
