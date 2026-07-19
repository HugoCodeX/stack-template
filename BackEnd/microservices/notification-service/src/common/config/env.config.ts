import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NOTIFICATION_SERVICE_PORT: Joi.number().default(3003),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  REDIS_HOST: Joi.string().default('localhost'),
  REDIS_PORT: Joi.number().default(6379),
  REDIS_PASSWORD: Joi.string().default('redis123'),
});
