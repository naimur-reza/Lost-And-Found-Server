import { User, Profile } from "@prisma/client";

type TUser = Pick<User, "name" | "email" | "password">;
type TProfile = Pick<Profile, "age" | "bio">;

export type TUserPayload = TUser & {
  profile: TProfile;
};
