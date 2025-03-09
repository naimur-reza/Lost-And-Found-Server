import { object, z } from "zod";

export const createCategoryValidation = object({
  body: object({
    title: z.string().nonempty(),
  }),
});
