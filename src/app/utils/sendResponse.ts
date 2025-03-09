import { Response } from "express";

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
  meta?: TMeta;
  token?: string;
};

type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
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
