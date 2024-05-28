import prisma from "../../shared/prisma";

const createLostItemCategory = async (payload: { name: string }) => {
  const result = await prisma.lostItemCategory.create({
    data: payload,
  });

  return result;
};

export const lostItemCategoryService = {
  createLostItemCategory,
};
