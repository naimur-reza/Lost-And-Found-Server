import { string, object, number } from "zod";

const updateProfileSchema = object({
  body: object({
    bio: string(),
    age: number(),
  }),
});

export const userValidationSchema = {
  updateProfileSchema,
};
