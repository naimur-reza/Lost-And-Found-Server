import { Router } from "express";
import { userRoutes } from "../modules/User/user.routes";
import { authRoutes } from "../modules/Auth/auth.routes";

const router = Router();

const options = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/users",
    route: userRoutes,
  },
];

options.forEach(item => router.use(item.path, item.route));

export const appRouter = router;
