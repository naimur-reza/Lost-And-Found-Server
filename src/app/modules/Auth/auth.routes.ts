import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../utils/validateRequest";
import { authValidationSchema } from "./auth.validation";

const router = Router();

router.post(
  "/register",
  validateRequest(authValidationSchema.registerSchema),
  authController.register,
);

router.post(
  "/login",
  validateRequest(authValidationSchema.loginSchema),
  authController.login,
);

export const authRoutes = router;
