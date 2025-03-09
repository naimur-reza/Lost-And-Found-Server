import { Item } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";

const reportItemIntoDB = async (
  user: JwtPayload,
  payload: Omit<Item, "userId">,
) => {
  const { categoryId } = payload;

  //   check if the category is available
  await prisma.category.findUniqueOrThrow({
    where: { id: categoryId },
  });

  const result = await prisma.item.create({
    data: {
      userId: user.id,
      ...payload,
    },
    select: { user: true },
  });

  return result;
};

const getAllItemsFromDB = async () => {};

const getSingleItem = async () => {};

const getMyItemsFromDB = async () => {};

export const itemServices = {
  reportItemIntoDB,
  getAllItemsFromDB,
  getSingleItem,
  getMyItemsFromDB,
};
