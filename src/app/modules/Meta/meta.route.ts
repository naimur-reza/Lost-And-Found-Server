import express from "express";
import { UserRole } from "../../constant/userRole";
import auth from "../../middleware/auth";
import { MetaController } from "./meta.controller";

const router = express.Router();

router.get("/", auth(UserRole.Admin), MetaController.fetchDashboardMetaData);

export const MetaRoutes = router;
