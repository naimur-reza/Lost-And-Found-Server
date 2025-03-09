import { Category } from "@prisma/client";
import prisma from "../../shared/prisma";

// Create a new category
const createCategoryIntoDB = async (payload: Category) => {
  return await prisma.category.create({
    data: payload,
  });
};

// Get all categories
const getAllCategories = async () => {
  return await prisma.category.findMany();
};

// Get a single category by ID
const getCategoryById = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
  });
};

// Update a category
const updateCategory = async (id: string, payload: Partial<Category>) => {
  return await prisma.category.update({
    where: { id },
    data: payload,
  });
};

// Delete a category
const deleteCategory = async (id: string) => {
  return await prisma.category.delete({
    where: { id },
  });
};

export const categoryServices = {
  createCategoryIntoDB,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
