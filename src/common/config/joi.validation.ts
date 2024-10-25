import * as Joi from "joi";

export const JoiValidationSchema = Joi.object({
    MONGO_URL: Joi.required(),
    PORT: Joi.number().default(3002),
    DEFAULT_LIMIT: Joi.number().default(5)
})