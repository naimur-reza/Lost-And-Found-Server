import { Router } from "express";
import auth from "../../middleware/auth";
import { claimValidationSchema } from "./claim.validation";
import { claimController } from "./claim.controller";
import validateRequest from "../../utils/validateRequest";

const router = Router();

router.post(
  "/",
  auth(),
  validateRequest(claimValidationSchema.claimSchema),
  claimController.createClaim,
);

router.get("/", auth(), claimController.getAllClaims);

router.patch(
  "/:claimId",
  auth(),
  validateRequest(claimValidationSchema.updateClaimSchema),
  claimController.updateClaimStatus,
);

export const claimRoutes = router;
