import { Router } from "express";
import { lostItemController } from "./lostItem.controller";
import validateRequest from "../../utils/validateRequest";
import { lostItemValidation } from "./lostItem.validation";

const router = Router();

router.post(
  "/",
  validateRequest(lostItemValidation.reportLostItemSchema),
  lostItemController.reportLostItem,
);

router.get("/", lostItemController.getAllLostItems);

export const lostItemRouter = router;
