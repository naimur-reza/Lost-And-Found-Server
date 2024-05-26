import { User, Profile } from "@prisma/client";

type TUser = Pick<User, "name" | "email" | "password" | "mobile">;
type TProfile = Pick<Profile, "age" | "bio">;

export type TRegister = TUser & {
  profile: TProfile;
};

export type TLogin = { email: string; password: string };
