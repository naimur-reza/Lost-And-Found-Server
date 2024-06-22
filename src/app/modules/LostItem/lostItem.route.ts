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

router.get("/", lostItemController.getAllLostItems);

router.get(
  "/my-lost-items",
  auth(UserRole.Admin, UserRole.User),
  lostItemController.getMyLostItems,
);

router.get(
  "/:id",
  auth(UserRole.Admin, UserRole.User),
  lostItemController.getSingleLostItem,
);

router.patch(
  "/:id/status",
  auth(UserRole.User, UserRole.Admin),
  lostItemController.changeStatus,
);

export const lostItemRouter = router;
