/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("Touch error...");
  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something broke!",
    error: err,
  });
};

export default globalErrorHandler;
