import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { authServices } from "./auth.service";

const register: RequestHandler = catchAsync(async (req, res) => {
  const user = await authServices.registerUser();
  res.status(200).json({
    success: true,
    message: "User registered successfully!",
    data: user,
  });
});

const login: RequestHandler = catchAsync(async (req, res) => {
  const user = await authServices.loginUser();
  res.status(200).json({
    success: true,
    message: "User registered successfully!",
    data: user,
  });
});

export const authController = {
  register,
  login,
};
