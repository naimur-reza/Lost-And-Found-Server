import { Router } from "express";
import { userRoutes } from "../modules/User/user.routes";
import { authRoutes } from "../modules/Auth/auth.routes";
import { foundItemCategoryRoutes } from "../modules/FoundItemCategory/foundItemCategory.routes";
import { foundItemRoutes } from "../modules/FoundItem/foundItem.routes";
import { claimRoutes } from "../modules/Claim/claim.routes";

const router = Router();

const options = [
  {
    path: "/",
    route: authRoutes,
  },
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/found-item-categories",
    route: foundItemCategoryRoutes,
  },
  {
    path: "/found-items",
    route: foundItemRoutes,
  },
  {
    path: "/claims",
    route: claimRoutes,
  },
];

options.forEach(item => router.use(item.path, item.route));

export const appRouter = router;
