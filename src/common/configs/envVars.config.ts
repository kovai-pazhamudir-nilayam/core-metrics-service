import * as Joi from 'joi';

export const envVariablesConfig = Joi.object({
  ENVIRONMENT: Joi.string().required(),
  CORE_KPN_URI: Joi.string().required(),
  AUTHN_SERVICE_URI: Joi.string().required(),
});
