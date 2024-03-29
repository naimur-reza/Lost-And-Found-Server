import prisma from "../../shared/prisma";
import { TUserPayload } from "../User/user.interface";
import bcrypt from "bcrypt";
const registerUser = async (payload: TUserPayload) => {
  const { name, email, password, profile } = payload;
  const hashPassword = bcrypt.hashSync(password, 10);

  const result = await prisma.$transaction(async transaction => {
    const user = await transaction.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
      // todo: profile coming null
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        profile: true,
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

  return { result };
};

const loginUser = () => {
  console.log("Hitted");
};

export const authServices = {
  registerUser,
  loginUser,
};
