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

const getAllCategories = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategories();

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    data: result,
    message: "Categories retrieved successfully",
  });
});

const getCategoryById = catchAsync(async (req, res) => {
  const result = await categoryServices.getCategoryById(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    data: result,
    message: "Category retrieved successfully",
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const result = await categoryServices.updateCategory(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    data: result,
    message: "Category updated successfully",
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  await categoryServices.deleteCategory(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "Category deleted successfully",
  });
});

export const categoryController = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
