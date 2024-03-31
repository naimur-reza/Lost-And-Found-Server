import GenericError from "../errors/GenericError";
import prisma from "../shared/prisma";
import verifyToken from "../utils/verifyToken";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization as string;
    if (!token) throw new GenericError(401, "Unauthorized access");

    const user = verifyToken(token, process.env.JWT_ACCESS_SECRET!);
    if (!user) throw new GenericError(401, "Unauthorized access");

    await prisma.user.findUniqueOrThrow({
      where: {
        email: user.email,
      },
    });

    req.user = user;

    next();
  });
};

export default auth;
