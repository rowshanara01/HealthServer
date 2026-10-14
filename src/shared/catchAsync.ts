import { NextFunction, Request, RequestHandler, Response } from "express";

// ** this is a higher order function**
// by this function we avoid to write more try catch functionality.
// we write once and use more times
const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

export default catchAsync;
