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

const updateClaimSchema = object({
  body: object({
    status: string({ required_error: "Status is required." }),
  }),
});

export const claimValidationSchema = {
  claimSchema,
  updateClaimSchema,
};
