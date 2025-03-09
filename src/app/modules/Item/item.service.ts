import { Item } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";
import { TMeta } from "../../types/global.types";

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
    select: {
      id: true,
      itemName: true,
      category: { select: { title: true } },
      user: { select: { id: true, name: true, email: true } },
    },
  });

  return result;
};

const getAllItemsFromDB = async (payload: any) => {
  const page = parseInt(payload.page) || 1;
  const limit = parseInt(payload.limit) || 10;

  const skip = (page - 1) * limit;

  const [items, total] = await Promise.all([
    prisma.item.findMany({
      skip,
      take: limit,
      select: {
        id: true,
        itemName: true,
        category: {
          select: { title: true },
        },
        location: true,
        date: true,
        image: true,
      },
    }),
    prisma.item.count(),
  ]);

  const meta: TMeta = {
    limit,
    page,
    total,
    totalPage: Math.ceil(total / limit),
  };

  return { result: items, meta };
};

const getSingleItem = async () => {};

const getMyItemsFromDB = async () => {};

export const itemServices = {
  reportItemIntoDB,
  getAllItemsFromDB,
  getSingleItem,
  getMyItemsFromDB,
};
