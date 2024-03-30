import { object, string } from "zod";

const claimSchema = object({
  body: object({
    foundItemId: string().uuid(),
    distinguishingFeatures: string({
      required_error: "distinguishingFeatures is required.",
    }),
    lostDate: string(),
  }),
});

export const claimValidationSchema = {
  claimSchema,
};
