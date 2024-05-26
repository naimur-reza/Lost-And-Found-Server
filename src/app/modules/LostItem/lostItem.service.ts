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

const getAllLostItemsFromDB = async (query: any) => {
  const {
    page = 1,
    limit = 10,
    searchTerm,
    sortBy,
    sortOrder = "asc",
    lostItemName,
  } = query;

  const offset = (+page - 1) * +limit;

  const where: Prisma.LostItemWhereInput = {
    AND: [
      searchTerm && {
        OR: [
          { lostItemName: { contains: searchTerm, mode: "insensitive" } },
          { location: { contains: searchTerm, mode: "insensitive" } },
          { description: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
      lostItemName && {
        lostItemName: { contains: lostItemName, mode: "insensitive" },
      },
    ].filter(Boolean),
  };

  const sortAbleFields = ["lostItemName", "category", "lostDate"];

  const sort: Prisma.LostItemOrderByWithRelationInput | undefined =
    sortBy &&
    sortAbleFields.includes(sortBy) &&
    ["asc", "desc"].includes(sortOrder)
      ? { [sortBy]: sortOrder as "asc" | "desc" }
      : undefined;

  // Fetch total count without pagination
  const totalCount = await prisma.lostItem.count({
    where,
  });

  const result = await prisma.lostItem.findMany({
    where,
    take: +limit,
    skip: offset,
    orderBy: sort,
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
};
