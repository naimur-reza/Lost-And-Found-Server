// export interface ILostItem {
//   name: string;
//   category: string;
//   date: string;
//   brand: string;
//   primaryColor: string;
//   secondaryColor: string;
//   timeLost: string;
//   image: string;
// }

import { z } from "zod";

const reportLostItemSchema = z.object({
  name: z.string().min(3).max(255),
  category: z.string().min(3).max(255),
  date: z.string().min(3).max(255),
  brand: z.string().min(3).max(255),
  primaryColor: z.string().min(3).max(255),
  secondaryColor: z.string().min(3).max(255),
  timeLost: z.string().min(3).max(255),
});

export const lostItemValidation = {
  reportLostItemSchema,
};
