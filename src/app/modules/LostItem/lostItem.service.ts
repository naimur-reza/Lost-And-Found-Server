import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";
import { Prisma } from "@prisma/client";

const reportLostItemIntoDB = async (user: JwtPayload, payload: any) => {
  const { categoryId } = payload;
  await prisma.lostItemCategory.findUniqueOrThrow({
    where: {
      id: categoryId,
    },
  });

  const result = await prisma.lostItem.create({
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
      itemName: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const getSingleLostItemFromDB = async (id: string) => {
  const result = await prisma.lostItem.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      category: true,
    },
  });

  return result;
};

const getAllLostItemsFromDB = async (query: any) => {
  const {
    page = 1,
    limit = 10,
    searchTerm,
    sortBy,
    sortOrder = "asc",
    itemName,
  } = query;

  const offset = (+page - 1) * +limit;

  const where: Prisma.LostItemWhereInput = {
    AND: [
      searchTerm && {
        OR: [
          { itemName: { contains: searchTerm, mode: "insensitive" } },
          { location: { contains: searchTerm, mode: "insensitive" } },
          { description: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
      itemName && {
        itemName: { contains: itemName, mode: "insensitive" },
      },
    ].filter(Boolean),
  };

  const sortAbleFields = ["itemName", "category", "lostDate"];

  const sort: Prisma.LostItemOrderByWithRelationInput | undefined =
    sortBy &&
    sortAbleFields.includes(sortBy) &&
    ["asc", "desc"].includes(sortOrder)
      ? { [sortBy]: sortOrder as "asc" | "desc" }
      : undefined;

  // Fetch total count without pagination

  const result = await prisma.lostItem.findMany({
    where,
    take: +limit,
    skip: offset,
    orderBy: sort,
  });

  const totalCount = await prisma.lostItem.count({
    where,
  });

  const meta = {
    total: totalCount,
    page: +page,
    limit: +limit,
  };

  return { result, meta };
};

export const lostItemService = {
  reportLostItemIntoDB,
  getAllLostItemsFromDB,
  getSingleLostItemFromDB,
};
