import { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.json({
    success: false,
    message: "Route not found!",
    error: {
      path: req.originalUrl,
      message: "Requesting path is not found!",
    },
  });
};

export default notFound;
