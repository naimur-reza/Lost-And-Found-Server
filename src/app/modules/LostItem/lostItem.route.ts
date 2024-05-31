import { Router } from "express";
import { lostItemController } from "./lostItem.controller";
import validateRequest from "../../utils/validateRequest";
import { lostItemValidation } from "./lostItem.validation";
import auth from "../../middleware/auth";
import { UserRole } from "../../constant/userRole";

const router = Router();

router.post(
  "/",
  auth(UserRole.Admin, UserRole.User),
  validateRequest(lostItemValidation.reportLostItemSchema),
  lostItemController.reportLostItem,
);

router.get(
  "/",
  auth(UserRole.Admin, UserRole.User),
  lostItemController.getAllLostItems,
);

export const lostItemRouter = router;