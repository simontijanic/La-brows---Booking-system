const rateLimit = require("express-rate-limit");

const postLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 3,
  skipFailedRequests: true,
});

const getLimiter = rateLimit({ //har ikke noe der, men hvorfor ikke
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  skipFailedRequests: true,
});

module.exports = {postLimiter, getLimiter}