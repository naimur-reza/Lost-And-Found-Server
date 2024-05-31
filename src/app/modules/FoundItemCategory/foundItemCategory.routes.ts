import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { foundItemCategoryController } from "./foundItemCategory.controller";
import { foundItemCategoryValidationSchema } from "./foundItemCategory.validation";
import auth from "../../middleware/auth";
import { UserRole } from "../../constant/userRole";

const router = Router();

router.post(
  "/",
  auth(UserRole.Admin),
  validateRequest(
    foundItemCategoryValidationSchema.createFoundItemCategorySchema,
  ),
  foundItemCategoryController.createFoundItemCategory,
);

router.get("/", foundItemCategoryController.getAllFoundItemCategories);

export const foundItemCategoryRoutes = router;
