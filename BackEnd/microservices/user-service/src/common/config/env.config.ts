import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  USER_SERVICE_PORT: Joi.number().default(3001),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  JWT_SECRET: Joi.string().min(10).default('your-super-secret-jwt-key').messages({
    'string.min': 'JWT_SECRET debe tener al menos 10 caracteres',
  }),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USER: Joi.string().default('postgres'),
  DATABASE_PASSWORD: Joi.string().default('postgres123'),
  DATABASE_NAME: Joi.string().default('userdb'),
});
