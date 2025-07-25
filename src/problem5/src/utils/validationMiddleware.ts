import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validate = (schema: Joi.ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error: any) {
      const errors: any = error.details.map((err: any) => err.message);
      res.status(400).json({ errors });
    }
  };
};
