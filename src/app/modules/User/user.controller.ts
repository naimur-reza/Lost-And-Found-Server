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

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
  const result = await userService.getAllUsers();
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "User retrieved successfully",
    data: result,
  });
});

const updateMyProfile: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const payload = req.body;
  const result = await userService.updateMyProfile(user, payload);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "User profile updated successfully",
    data: result,
  });
});

const removeUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await userService.removeUserFromDB(req.params.id);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "User deleted successfully",
    data: result,
  });
});

export const userController = {
  getMyProfile,
  updateMyProfile,
  getAllUsers,
  removeUser,
};
