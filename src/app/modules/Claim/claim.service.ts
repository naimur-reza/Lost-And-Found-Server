import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";
import { Status } from "@prisma/client";

const createClaimIntoDB = async (user: JwtPayload, payload: any) => {
  await prisma.foundItem.findUniqueOrThrow({
    where: {
      id: payload.foundItemId,
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
      foundItem: {
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
      foundItem: {
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
}


export const claimServices = {
  createClaimIntoDB,
  getAllClaimsFromDB,
  updateClaimStatus,
  getMyClaimItemsFromDB,
};
