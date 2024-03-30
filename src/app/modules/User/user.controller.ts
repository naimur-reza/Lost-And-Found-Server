import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";

const getMyProfile: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await userService.getMyProfile(user);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "Profile retrieved successfully",
    data: result,
  });
});

export const userController = {
  getMyProfile,
};
