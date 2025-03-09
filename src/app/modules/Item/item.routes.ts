import { Router } from "express";
import { UserRole } from "../../constant/userRole";
import auth from "../../middleware/auth";
import validateRequest from "../../utils/validateRequest";
import { itemController } from "./item.controller";
import { createItemSchema } from "./item.validation";

const router = Router();

router.post(
  "/report",
  auth(UserRole.Admin, UserRole.User),
  validateRequest(createItemSchema),
  itemController.reportItem,
);

export const ItemRoutes = router;
