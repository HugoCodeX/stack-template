import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  API_GATEWAY_PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  JWT_SECRET: Joi.string().min(10).default('your-super-secret-jwt-key').messages({
    'string.min': 'JWT_SECRET debe tener al menos 10 caracteres',
  }),
  USER_SERVICE_URL: Joi.string().uri().default('http://localhost:3001'),
  PRODUCT_SERVICE_URL: Joi.string().uri().default('http://localhost:3002'),
  NOTIFICATION_SERVICE_URL: Joi.string().uri().default('http://localhost:3003'),
});
