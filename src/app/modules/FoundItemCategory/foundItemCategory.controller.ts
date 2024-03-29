import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { foundItemCategoryService } from "./foundItemCategory.service";

const createFoundItemCategory: RequestHandler = catchAsync(async (req, res) => {
  const result = await foundItemCategoryService.createFoundItemCategory(
    req.body,
  );
  res.status(200).json({
    success: true,
    message: "Found item category created successfully",
    data: result,
  });
});

export const foundItemCategoryController = {
  createFoundItemCategory,
};
