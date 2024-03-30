import { Router } from "express";
import auth from "../../middleware/auth";
import { userController } from "./user.controller";
import validateRequest from "../../utils/validateRequest";
import { userValidationSchema } from "./user.validation";

const router = Router();

router.get("/my-profile", auth(), userController.getMyProfile);

router.patch(
  "/my-profile",
  auth(),
  validateRequest(userValidationSchema.updateProfileSchema),
  userController.updateMyProfile,
);

export const userRoutes = router;
