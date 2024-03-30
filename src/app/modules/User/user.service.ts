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

export const userService = {
  getMyProfile,
  updateMyProfile,
};
