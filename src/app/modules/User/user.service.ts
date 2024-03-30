import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";

const getMyProfile = async (payload: JwtPayload) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      id: payload.id,
    },
  });

  console.log(user);

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

export const userService = {
  getMyProfile,
};
