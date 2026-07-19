export const configuration = () => ({
  port: parseInt(process.env.PRODUCT_SERVICE_PORT || process.env.PORT || '3002', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://mongo:mongo123@localhost:27017/productdb?authSource=admin',
  },
});
