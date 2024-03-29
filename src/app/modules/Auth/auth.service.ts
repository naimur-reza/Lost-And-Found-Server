import prisma from "../../shared/prisma";
import { TUserPayload } from "../User/user.interface";
import bcrypt from "bcrypt";
const registerUser = async (payload: TUserPayload) => {
  const { name, email, password, profile } = payload;
  const hashPassword = bcrypt.hashSync(password, 10);

  const registeredUser = await prisma.$transaction(async transaction => {
    const user = await transaction.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    await transaction.profile.create({
      data: {
        userId: user.id,
        bio: profile.bio,
        age: profile.age,
      },
    });

    return user;
  });
  const result = await prisma.user.findUnique({
    where: {
      id: registeredUser.id,
    },
    include: {
      profile: true,
    },
  });

  return { ...result, password: undefined };
};

const loginUser = () => {
  console.log("Hitted");
};

export const authServices = {
  registerUser,
  loginUser,
};
