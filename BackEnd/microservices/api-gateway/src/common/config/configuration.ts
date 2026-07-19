export const configuration = () => ({
  port: parseInt(process.env.API_GATEWAY_PORT || process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  jwt: {
    secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
  },
  services: {
    user: process.env.USER_SERVICE_URL || 'http://localhost:3001',
    product: process.env.PRODUCT_SERVICE_URL || 'http://localhost:3002',
    notification: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3003',
  },
});
