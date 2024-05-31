import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { foundItemValidationSchema } from "./foundItem.validation";
import { foundItemController } from "./foundItem.controller";
import auth from "../../middleware/auth";
import { UserRole } from "../../constant/userRole";

const router = Router();

router.post(
  "/",
  auth(UserRole.Admin, UserRole.User),
  validateRequest(foundItemValidationSchema.foundItemSchema),
  foundItemController.reportFoundItem,
);

router.get(
  "/",
  auth(UserRole.Admin, UserRole.User),
  foundItemController.getAllFoundItems,
);

export const foundItemRoutes = router;
