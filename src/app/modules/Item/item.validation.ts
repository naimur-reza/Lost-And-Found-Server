import { CATEGORY, Status } from "@prisma/client";
import { z } from "zod";

export const itemSchema = z.object({
  itemName: z.string().min(2, "Item name must be at least 2 characters."),
  categoryId: z.string().uuid("Invalid category ID."),
  description: z.string().optional(),
  location: z.string().min(2, "Location must be at least 2 characters."),
  date: z.coerce.date(),
  brand: z.string().optional(),
  image: z.string().url("Invalid image URL."),
  time: z.string(),
  primaryColor: z.string(),
  secondaryColor: z.string(),
  type: z.nativeEnum(CATEGORY),
  status: z.nativeEnum(Status).default(Status.PENDING),
});

// Optional: Validation for requests
export const createItemSchema = z.object({
  body: itemSchema,
});

export const updateItemSchema = z.object({
  body: itemSchema.partial(),
});
