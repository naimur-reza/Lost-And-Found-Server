import { Router } from "express";
import { UserRole } from "../../constant/userRole";
import auth from "../../middleware/auth";
import { itemController } from "./item.controller";

const router = Router();

router.post(
  "/",
  auth(UserRole.Admin, UserRole.User),
  itemController.reportItem,
);

export const ItemRoutes = router;
