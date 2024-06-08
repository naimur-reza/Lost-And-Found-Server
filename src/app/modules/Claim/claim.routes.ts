import { Router } from "express";
import auth from "../../middleware/auth";
import { claimValidationSchema } from "./claim.validation";
import { claimController } from "./claim.controller";
import validateRequest from "../../utils/validateRequest";
import { UserRole } from "../../constant/userRole";

const router = Router();

router.post(
  "/",
  auth(UserRole.User,
    UserRole.Admin
  ),
  validateRequest(claimValidationSchema.claimSchema),
  claimController.createClaim,
);

router.get(
  "/",
  auth(UserRole.User, UserRole.Admin),
  claimController.getAllClaims,
);

router.patch(
  "/:claimId",
  auth(UserRole.User, UserRole.Admin),
  validateRequest(claimValidationSchema.updateClaimSchema),
  claimController.updateClaimStatus,
);

export const claimRoutes = router;
