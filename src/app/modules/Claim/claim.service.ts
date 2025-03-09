import { Status } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";

const createClaimIntoDB = async (user: JwtPayload, payload: any) => {
  await prisma.item.findUniqueOrThrow({
    where: {
      id: payload.itemId,
    },
  });

  const result = await prisma.claim.create({
    data: {
      userId: user.id,
      ...payload,
    },
  });

  return result;
};

const getAllClaimsFromDB = async () => {
  const result = await prisma.claim.findMany({
    include: {
      item: {
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
      },
    },
  });

  return result;
};

const updateClaimStatus = async (id: string, status: Status) => {
  const result = await prisma.claim.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
  return result;
};

const getMyClaimItemsFromDB = async (user: JwtPayload) => {
  const result = await prisma.claim.findMany({
    where: {
      userId: user.id,
    },
    include: {
      item: {
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
      },
    },
  });

  return result;
};

export const claimServices = {
  createClaimIntoDB,
  getAllClaimsFromDB,
  updateClaimStatus,
  getMyClaimItemsFromDB,
};
