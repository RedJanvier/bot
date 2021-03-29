import core from '../../../core';

const { logger } = core.Utils;

const asyncHandler = (fn) => async (...params) =>
  Promise.resolve(fn(...params)).catch((err) => logger.error(err));

export default asyncHandler;
