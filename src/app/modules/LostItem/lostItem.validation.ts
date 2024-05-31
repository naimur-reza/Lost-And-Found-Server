import { z } from "zod";

const reportLostItemSchema = z.object({
  body: z.object({
    itemName: z.string().min(3).max(255),
    categoryId: z.string().uuid(),
    date: z.string().refine(val => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
    brand: z.string().min(3).max(255),
    primaryColor: z.string().min(3).max(255),
    secondaryColor: z.string().min(3).max(255),
    location: z.string().min(3).max(255),
    description: z.string().min(3).max(255),
    timeLost: z.string().regex(/^([01]\d|2[0-3]):?([0-5]\d)$/, {
      message: "Invalid time format (HH:mm)",
    }),
    image: z.string().url().optional(),
  }),
});

export const lostItemValidation = {
  reportLostItemSchema,
};
