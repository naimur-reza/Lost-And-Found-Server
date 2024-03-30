import { RequestHandler } from "express";
import { foundItemService } from "./foundItem.service";
import catchAsync from "../../utils/catchAsync";

const reportFoundItem: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const foundItem = req.body;
  const result = await foundItemService.reportFoundItem(user, foundItem);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Found item reported successfully",
    data: result,
  });
});

export const foundItemController = {
  reportFoundItem,
};
