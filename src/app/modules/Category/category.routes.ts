import { Router } from "express";
import { UserRole } from "../../constant/userRole";
import auth from "../../middleware/auth";
import validateRequest from "../../utils/validateRequest";
import { categoryController } from "./category.controller";
import { createCategoryValidation } from "./category.validation";

const router = Router();

router.post(
  "/",
  auth(UserRole.Admin, UserRole.Super_Admin),
  validateRequest(createCategoryValidation),
  categoryController.createCategory,
);

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);
router.patch(
  "/:id",
  auth(UserRole.Admin, UserRole.Super_Admin),
  categoryController.updateCategory,
);
router.delete(
  "/:id",
  auth(UserRole.Admin, UserRole.Super_Admin),
  categoryController.deleteCategory,
);

export const CategoryRoutes = router;
