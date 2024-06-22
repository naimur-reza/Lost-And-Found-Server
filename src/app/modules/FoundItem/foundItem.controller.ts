import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { foundItemService } from "./foundItem.service";

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
    message: "Found items retrieved successfully",
    meta,
    data: result,
  });
});

const getFoundItemById: RequestHandler = catchAsync(async (req, res) => {
  const result = await foundItemService.getSingleFoundItem(req.params.id);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "Found item retrieved successfully",
    data: result,
  });
});

const getMyFoundItems: RequestHandler = catchAsync(async (req, res) => {
  const result = await foundItemService.getMyFoundItemsFromDB(req.user);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "My Found items retrieved successfully",
    data: result,
  });
});

export const foundItemController = {
  reportFoundItem,
  getAllFoundItems,
  getFoundItemById,
  getMyFoundItems,
};
