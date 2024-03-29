import { Router } from "express";

const router = Router();

const options = [
  {
    path: "",
    route: "",
  },
];

options.forEach(item => router.use(item.path, item.route));

export const appRouter = router;
