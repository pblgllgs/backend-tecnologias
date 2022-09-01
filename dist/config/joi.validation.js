"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationSchema = void 0;
const Joi = require("joi");
exports.JoiValidationSchema = Joi.object({
    DATABASE_URL: Joi.required(),
    PORT: Joi.number().default(3005),
});
//# sourceMappingURL=joi.validation.js.map