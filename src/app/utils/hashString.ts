import { hashSync } from "bcrypt";

export const hashString = async (payload: string) => {
  return hashSync(payload, 10);
};
