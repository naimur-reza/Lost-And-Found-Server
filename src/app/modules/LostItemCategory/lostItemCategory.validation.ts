import { object, string } from "zod";

const createLostItemCategorySchema = object({
  body: object({
    name: string().min(3).max(255),
  }),
});

export const lostItemCategoryValidation = {
  createLostItemCategorySchema,
};
