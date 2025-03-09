import { Router } from "express";
import { UserRole } from "../../constant/userRole";
import auth from "../../middleware/auth";
import validateRequest from "../../utils/validateRequest";
import { categoryController } from "./category.controller";
import { createCategoryValidation } from "./category.validation";

const router = Router();

router.post(
  "/",
  auth(UserRole.Admin),
  validateRequest(createCategoryValidation),
  categoryController.createCategory,
);

export const CategoryRoutes = router;
