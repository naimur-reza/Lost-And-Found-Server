import { Router } from "express";
import { userRoutes } from "../modules/User/user.routes";
import { authRoutes } from "../modules/Auth/auth.routes";
import { foundItemCategoryRoutes } from "../modules/FoundItemCategory/foundItemCategory.routes";

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
  {
    path: "/found-item-category",
    route: foundItemCategoryRoutes,
  },
];

options.forEach(item => router.use(item.path, item.route));

export const appRouter = router;
