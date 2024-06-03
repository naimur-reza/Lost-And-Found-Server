import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";
import { Profile } from "@prisma/client";

const getMyProfile = async (jwtPayload: JwtPayload) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: jwtPayload.id,
    },
  });

  const result = await prisma.profile.findUnique({
    where: {
      userId: user.id,
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
    },
  });

  return result;
};

const updateMyProfile = async (
  jwtPayload: JwtPayload,
  payload: Partial<Profile>,
) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: jwtPayload.id,
    },
  });

  const result = await prisma.profile.update({
    where: {
      userId: user.id,
    },

    data: payload,
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
    },
  });

  return result;
};

const getAllUsers = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      mobile: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return result;
};

const removeUserFromDB = async (id: string) => {
  await prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });

  const transaction = await prisma.$transaction([
    prisma.profile.delete({
      where: {
        userId: id,
      },
    }),
    prisma.user.delete({
      where: {
        id,
      },
    }),
  ]);

  return transaction;
};

export const userService = {
  getMyProfile,
  updateMyProfile,
  getAllUsers,
  removeUserFromDB,
};
