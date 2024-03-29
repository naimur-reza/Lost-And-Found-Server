import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { foundItemCategoryController } from "./foundItemCategory.controller";
import { foundItemCategoryValidationSchema } from "./foundItemCategory.validation";
import auth from "../../middleware/auth";

const router = Router();

router.post(
  "/",
  auth(),
  validateRequest(
    foundItemCategoryValidationSchema.createFoundItemCategorySchema,
  ),
  foundItemCategoryController.createFoundItemCategory,
);

export const foundItemCategoryRoutes = router;
