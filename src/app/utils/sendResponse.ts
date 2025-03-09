import { Response } from "express";
import { TMeta } from "../types/global.types";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
  meta?: TMeta;
  token?: string;
};

const sendResponse = <T>(
  res: Response,
  { statusCode, success, message, data, meta, token }: TResponse<T>,
) => {
  res.status(statusCode).json({
    success: success,
    message: message,
    ...(data && { data }),
    ...(meta && { meta }),
    ...(token && { token }),
  });
};

export default sendResponse;
