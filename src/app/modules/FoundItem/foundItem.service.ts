import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";

const reportFoundItem = async (user: JwtPayload, payload: any) => {
  const { categoryId } = payload;
  await prisma.foundItemCategory.findUniqueOrThrow({
    where: {
      id: categoryId,
    },
  });

  const result = await prisma.foundItem.create({
    data: {
      userId: user.id,
      ...payload,
    },
    select: {
      id: true,
      userId: true,
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      categoryId: true,
      category: true,
      foundItemName: true,
      description: true,
      location: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

export const foundItemService = {
  reportFoundItem,
};
