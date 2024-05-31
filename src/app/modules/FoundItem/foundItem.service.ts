import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";
import { Prisma } from "@prisma/client";

const reportFoundItemIntoDB = async (user: JwtPayload, payload: any) => {
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
      itemName: true,
      description: true,
      location: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};

const getAllFoundItemsFromDB = async (query: any) => {
  const {
    page = 1,
    limit = 10,
    searchTerm,
    sortBy,
    sortOrder = "asc",
    foundItemName,
  } = query;

  const offset = (+page - 1) * +limit;

  const where: Prisma.FoundItemWhereInput = {
    AND: [
      searchTerm && {
        OR: [
          { foundItemName: { contains: searchTerm, mode: "insensitive" } },
          { location: { contains: searchTerm, mode: "insensitive" } },
          { description: { contains: searchTerm, mode: "insensitive" } },
        ],
      },
      foundItemName && {
        foundItemName: { contains: foundItemName, mode: "insensitive" },
      },
    ].filter(Boolean),
  };

  const sortAbleFields = ["foundItemName", "category", "foundDate"];

  const sort: Prisma.FoundItemOrderByWithRelationInput | undefined =
    sortBy &&
    sortAbleFields.includes(sortBy) &&
    ["asc", "desc"].includes(sortOrder)
      ? { [sortBy]: sortOrder as "asc" | "desc" }
      : undefined;

  // Fetch total count without pagination
  const totalCount = await prisma.foundItem.count({
    where,
  });

  const result = await prisma.foundItem.findMany({
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

export const foundItemService = {
  reportFoundItemIntoDB,
  getAllFoundItemsFromDB,
};
