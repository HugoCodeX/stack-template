export const configuration = () => ({
  port: parseInt(process.env.NOTIFICATION_SERVICE_PORT || process.env.PORT || '3003', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD || 'redis123',
  },
});
