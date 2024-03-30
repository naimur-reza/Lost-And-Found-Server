import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { foundItemValidationSchema } from "./foundItem.validation";
import { foundItemController } from "./foundItem.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post(
  "/",
  auth(),
  validateRequest(foundItemValidationSchema.foundItemSchema),
  foundItemController.reportFoundItem,
);

router.get("/", auth(), foundItemController.getAllFoundItems);

export const foundItemRoutes = router;
