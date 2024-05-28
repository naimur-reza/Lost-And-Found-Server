import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { lostItemCategoryController } from "./lostItemCategory.controller";

import auth from "../../middleware/auth";
import { lostItemCategoryValidation } from "./lostItemCategory.validation";
import { UserRole } from "../../constant/userRole";

const router = Router();

router.post(
  "/",
  auth(UserRole.Admin),
  validateRequest(lostItemCategoryValidation.createLostItemCategorySchema),
  lostItemCategoryController.createLostItemCategory,
);

export const lostItemCategoryRoutes = router;
