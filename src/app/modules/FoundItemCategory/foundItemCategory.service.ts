import prisma from "../../shared/prisma";

const createFoundItemCategory = async (payload: { name: string }) => {
  const result = await prisma.foundItemCategory.create({
    data: payload,
  });

  return result;
};

const getAllFoundItemCategories = async () => {
  const result = await prisma.foundItemCategory.findMany();
  return result;
};

export const foundItemCategoryService = {
  createFoundItemCategory,
  getAllFoundItemCategories,
};
