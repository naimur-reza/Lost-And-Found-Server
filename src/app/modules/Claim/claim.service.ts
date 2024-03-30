import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";

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

export const claimServices = {
  createClaimIntoDB,
  getAllClaimsFromDB,
};
