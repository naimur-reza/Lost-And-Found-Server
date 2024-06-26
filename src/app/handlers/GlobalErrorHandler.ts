/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from "express";

import { ZodError } from "zod";
import { handleZodError } from "../errors/handleZodError";
import { IGenericError } from "../interfaces/error";
import { JsonWebTokenError } from "jsonwebtoken";
import handleJwtError from "../errors/handleJwtError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let generalError: IGenericError = {
    status: err.status || 500,
    message: err.message || "Something broke!",
    errorDetails: err,
  };

  if (err instanceof ZodError) {
    generalError = handleZodError(err);
  }

  if (err instanceof JsonWebTokenError) {
    generalError = handleJwtError(err);
  }

  return res.status(generalError.status).json({
    success: false,
    message: generalError.message,
    errorDetails: generalError.errorDetails,
  });
};

export default globalErrorHandler;
