import { Router } from "express";
import auth from "../../middleware/auth";
import { userController } from "./user.controller";

const router = Router();

router.get("/my-profile", auth(), userController.getMyProfile);

export const userRoutes = router;
