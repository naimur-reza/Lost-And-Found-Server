import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { foundItemCategoryController } from "./foundItemCategory.controller";
import { foundItemCategoryValidationSchema } from "./foundItemCategory.validation";

const router = Router();

router.post(
  "/",
  validateRequest(
    foundItemCategoryValidationSchema.createFoundItemCategorySchema,
  ),
  foundItemCategoryController.createFoundItemCategory,
);

export const foundItemCategoryRoutes = router;
