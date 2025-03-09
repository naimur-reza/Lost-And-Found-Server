import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { itemServices } from "./item.service";

const reportItem = catchAsync(async (req, res) => {
  const user = req.user;
  const item = req.body;
  const result = await itemServices.reportItemIntoDB(user, item);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Item reported successfully",
    data: result,
  });
});

const getAllItems = catchAsync(async (req, res) => {
  const { result, meta } = await itemServices.getAllItemsFromDB(req.query);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Items retrieved successfully",
    meta,
    data: result,
  });
});

const getItemsById = catchAsync(async (req, res) => {
  const result = await itemServices.getSingleItem(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Item retrieved successfully",
    data: result,
  });
});

const getMyItems = catchAsync(async (req, res) => {
  const result = await itemServices.getMyItemsFromDB(req.user);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Your items retrieved successfully",
    data: result,
  });
});

export const itemController = {
  reportItem,
  getAllItems,
  getItemsById,
  getMyItems,
};
