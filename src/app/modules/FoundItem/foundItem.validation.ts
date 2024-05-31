import { object, string } from "zod";

const foundItemSchema = object({
  body: object({
    categoryId: string({ required_error: "Invalid UUID" }).uuid().optional(),
    itemName: string().min(1, { message: "foundItemName is required." }),
    description: string().min(1, { message: "description is required." }),
    location: string().min(1, { message: "location is required." }),
    primaryColor: string().min(1, { message: "primaryColor is required." }),
    secondaryColor: string().min(1, { message: "secondaryColor is required." }),
    timeFound: string().min(1, { message: "timeFound is required." }),
    date: string().min(1, { message: "date is required." }),

    image: string().min(1, { message: "image is required." }),
  }),
});

export const foundItemValidationSchema = {
  foundItemSchema,
};
