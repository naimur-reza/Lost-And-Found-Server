import { Category } from "@prisma/client";
import prisma from "../../shared/prisma";

const createCategoryIntoDB = async (payload: Category) => {
  const result = await prisma.category.create({
    data: payload,
  });

  return result;
};

export const categoryServices = {
  createCategoryIntoDB,
};
