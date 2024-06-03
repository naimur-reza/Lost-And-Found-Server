import { RequestHandler } from "express";
import { lostItemService } from "./lostItem.service";
import catchAsync from "../../utils/catchAsync";

const reportLostItem: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const lostItem = req.body;
  const result = await lostItemService.reportLostItemIntoDB(user, lostItem);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Lost item reported successfully",
    data: result,
  });
});

const getSingleLostItem: RequestHandler = catchAsync(async (req, res) => {
  const result = await lostItemService.getSingleLostItemFromDB(req.params.id);
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "Lost item retrieved successfully",
    data: result,
  });
});

const getAllLostItems: RequestHandler = catchAsync(async (req, res) => {
  const { result, meta } = await lostItemService.getAllLostItemsFromDB(
    req.query,
  );
  res.status(201).json({
    success: true,
    statusCode: 200,
    message: "Lost items retrieved successfully",
    meta,
    data: result,
  });
});

export const lostItemController = {
  reportLostItem,
  getAllLostItems,
  getSingleLostItem,
};
