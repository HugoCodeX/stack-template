import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PRODUCT_SERVICE_PORT: Joi.number().default(3002),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  MONGODB_URI: Joi.string().uri().default('mongodb://mongo:mongo123@localhost:27017/productdb?authSource=admin'),
});
