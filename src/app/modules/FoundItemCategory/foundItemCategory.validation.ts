import z from "zod";

const createFoundItemCategorySchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Found item name is required." }),
  }),
});

export const foundItemCategoryValidationSchema = {
  createFoundItemCategorySchema,
};
