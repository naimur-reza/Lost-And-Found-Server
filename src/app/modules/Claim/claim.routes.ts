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

export const claimRoutes = router;
