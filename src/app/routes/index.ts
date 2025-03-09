import { Router } from "express";
import { authRoutes } from "../modules/Auth/auth.routes";
import { CategoryRoutes } from "../modules/Category/category.routes";
import { claimRoutes } from "../modules/Claim/claim.routes";
import { ItemRoutes } from "../modules/Item/item.routes";
import { MetaRoutes } from "../modules/Meta/meta.route";
import { userRoutes } from "../modules/User/user.routes";

type TOptions = {
  path: string;
  route: Router;
}[];

const router = Router();

const options: TOptions = [
  {
    path: "/",
    route: authRoutes,
  },
  {
    path: "/",
    route: userRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/items",
    route: ItemRoutes,
  },
  {
    path: "/claims",
    route: claimRoutes,
  },
  {
    path: "/meta",
    route: MetaRoutes,
  },
];

options.forEach(item => router.use(item.path, item.route));

export const appRouter = router;
