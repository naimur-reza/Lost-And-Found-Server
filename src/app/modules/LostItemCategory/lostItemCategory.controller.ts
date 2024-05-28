import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { lostItemCategoryService } from "./lostItemCategory.service";

const createLostItemCategory: RequestHandler = catchAsync(async (req, res) => {
  const result = await lostItemCategoryService.createLostItemCategory(req.body);
  res.status(200).json({
    success: true,
    message: "Lost item category created successfully",
    data: result,
  });
});

export const lostItemCategoryController = {
  createLostItemCategory,
};
