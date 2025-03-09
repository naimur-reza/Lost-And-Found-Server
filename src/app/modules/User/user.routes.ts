import { Router } from "express";
import auth from "../../middleware/auth";
import { userController } from "./user.controller";

import { UserRole } from "../../constant/userRole";

const router = Router();

router.get(
  "/my-profile",
  auth(UserRole.Admin, UserRole.User),
  userController.getMyProfile,
);

router.get("/users", auth(UserRole.Admin), userController.getAllUsers);

router.patch(
  "/my-profile",
  auth(UserRole.Admin, UserRole.User),
  userController.updateMyProfile,
);

router.delete("/user/:id", auth(UserRole.Admin), userController.removeUser);

export const userRoutes = router;
