import prisma from "../../shared/prisma";

const createFoundItemCategory = async (payload: { name: string }) => {
  const result = await prisma.foundItemCategory.create({
    data: payload,
  });

  return result;
};

export const foundItemCategoryService = {
  createFoundItemCategory,
};
