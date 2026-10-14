import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

// this function perform as a middleware. it check that the right format data will received.
// before data received it checks either data format is right or not. if not then throw an error
const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (err) {
      next(err);
    }
  };

export default validateRequest;
