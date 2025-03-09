import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { items } from "./item.service";

const reportItem = catchAsync(async (req, res) => {
  const user = req.user;
  const item = req.body;
  const result = await items.reportItemIntoDB(user, item);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Item reported successfully",
    data: result,
  });
});

const getAllItems = catchAsync(async (req, res) => {
  const { result, meta } = await items.getAllItemssFromDB(req.query);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Items retrieved successfully",
    meta,
    data: result,
  });
});

const getItemsById = catchAsync(async (req, res) => {
  const result = await items.getSingleItems(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item retrieved successfully",
    data: result,
  });
});

const getMyItems = catchAsync(async (req, res) => {
  const result = await items.getMyItemssFromDB(req.user);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Your items retrieved successfully",
    data: result,
  });
});

export const itemsController = {
  reportItem,
  getAllItems,
  getItemsById,
  getMyItems,
};
