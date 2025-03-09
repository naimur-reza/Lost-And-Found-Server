import { status } from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { categoryServices } from "./category.service";

const createCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.CREATED,
    data: result,
    message: "Category created successfully",
  });
});

export const categoryController = {
  createCategory,
};
