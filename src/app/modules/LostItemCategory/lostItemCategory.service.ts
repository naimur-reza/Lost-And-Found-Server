import prisma from "../../shared/prisma";

const createLostItemCategory = async (payload: { name: string }) => {
  const result = await prisma.lostItemCategory.create({
    data: payload,
  });

  return result;
};

const getAllLostItemCategories = async () => {
  const result = await prisma.lostItemCategory.findMany();
  return result;
};

export const lostItemCategoryService = {
  createLostItemCategory,
  getAllLostItemCategories,
};
