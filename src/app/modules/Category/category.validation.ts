import { z } from "zod";

export const createCategoryValidation = z.object({
  title: z.string().nonempty(),
});
