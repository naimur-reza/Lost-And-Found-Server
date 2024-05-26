import { object, string } from "zod";

const foundItemSchema = object({
  body: object({
    categoryId: string().uuid().optional(),
    foundItemName: string().min(1, { message: "foundItemName is required." }),
    description: string().min(1, { message: "description is required." }),
    location: string().min(1, { message: "location is required." }),
    image: string().min(1, { message: "image is required." }),
  }),
});

export const foundItemValidationSchema = {
  foundItemSchema,
};
