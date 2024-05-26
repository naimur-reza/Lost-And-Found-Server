import { Router } from "express";
import { lostItemController } from "./lostItem.controller";

const router = Router();

router.post("/", lostItemController.reportLostItem);

export const lostItemRouter = router;
