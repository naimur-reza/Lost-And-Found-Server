import { RequestHandler } from "express";
import { foundItemService } from "./foundItem.service";
import catchAsync from "../../utils/catchAsync";

const reportFoundItem: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const foundItem = req.body;
  const result = await foundItemService.reportFoundItemIntoDB(user, foundItem);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Found item reported successfully",
    data: result,
  });
});

const getAllFoundItems: RequestHandler = catchAsync(async (req, res) => {
  const { result, meta } = await foundItemService.getAllFoundItemsFromDB(
    req.query,
  );
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "Found item retrieved successfully",
    meta,
    data: result,
  });
});

export const foundItemController = {
  reportFoundItem,
  getAllFoundItems,
};
