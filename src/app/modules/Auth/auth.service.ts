import prisma from "../../shared/prisma";
import bcrypt from "bcrypt";
import { TLogin, TRegister } from "./auth.interface";
import GenericError from "../../errors/GenericError";
import generateToken from "../../utils/generateToken";

const registerUser = async (payload: TRegister) => {
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

const loginUser = async (payload: TLogin) => {
  const { email, password } = payload;

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email,
    },
  });

  const comparePassword = bcrypt.compareSync(password, user.password);

  if (!comparePassword) throw new GenericError(400, "Password doesn't matched");

  const jwtPayload = {
    id: user.id,
    email: user.email,
  };

  const token = generateToken(
    jwtPayload,
    process.env.JWT_ACCESS_SECRET!,
    process.env.JWT_TOKEN_EXPIRES_IN!,
  );

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };
};

export const authServices = {
  registerUser,
  loginUser,
};
