import rateLimit from 'express-rate-limit';

const apiLimiter = (time = 15, maxRequests = 100) => rateLimit({
  max: maxRequests,
  windowMs: time * 60 * 1000,
});

export default apiLimiter;
